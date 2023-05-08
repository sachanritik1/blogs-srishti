import React, { useCallback, useEffect, useState } from "react"
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { auth, db } from "../firebase-config"

function Home({ isAuth }) {
	const [postLists, setPostList] = useState([])
	const postsCollectionRef = collection(db, "posts")

	const deletePost = async (id) => {
		const postDoc = doc(db, "posts", id)
		await deleteDoc(postDoc)
	}

	useEffect(() => {
		const getPosts = async () => {
			await getDocs(postsCollectionRef)
				.then((res) => {
					// res.docs.map((doc) => console.log(doc.data()))
					setPostList(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
				})
				.catch((err) => console.log(err))
		}

		getPosts()
	}, [deletePost, postsCollectionRef])

	return (
		<div className="homePage">
			{postLists.map((post) => {
				return (
					<div className="post">
						<div className="postHeader">
							<div className="title">
								<h1> {post.title}</h1>
							</div>
							<div className="deletePost">
								{isAuth && post.author.id === auth.currentUser.uid && (
									<button
										onClick={() => {
											deletePost(post.id)
										}}
									>
										{" "}
										&#128465;
									</button>
								)}
							</div>
						</div>
						<div className="postTextContainer"> {post.postText} </div>
						<h3>@{post.author.name}</h3>
					</div>
				)
			})}
		</div>
	)
}

export default Home
