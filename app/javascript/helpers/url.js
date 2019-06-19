const hostname = window && window.location && window.location.hostname;

const Url = () => {
	if(hostname=="localhost"){
		return{
			signIn: "http://localhost:3000/api/v1/sign_in",
			signUp: "http://localhost:3000/api/v1/sign_up",
			signOut: "http://localhost:3000/api/v1/sign_out",
			packages: "http://localhost:3000/api/v1/packages",
			category: "http://localhost:3000/api/v1/category",
			author: "http://localhost:3000/api/v1/authors",
			checkEmail: "http://localhost:3000/api/v1/check_email",
			confirmlogin: "http://localhost:3000/api/v1/authors",
		// Non authentication routes
			bestSellers: "http://localhost:3000/api/v1/best_sellers",
			allBooks: "http://localhost:3000/api/v1/books",
			premiumBooks: "http://localhost:3000/api/v1/premiumbooks",
			category: "http://localhost:3000/api/v1/category",
			packages: "http://localhost:3000/api/v1/packages",
			freeBooks: "http://localhost:3000/api/v1/freebooks",
			newlyCreatedBooks: "http://localhost:3000/api/v1/newly_created_books",
			newFreeBooks: "http://localhost:3000/api/v1/new_free_books",
			newPremiumBooks: "http://localhost:3000/api/v1/new_premium_books",
			singleBook: "http://localhost:3000/api/v1/book/",
			pages: "http://localhost:3000/api/v1/pages/",
			packages: "http://localhost:3000/api/v1/packages",
			getUserDetails: "http://localhost:3000/api/v1/get_user_details_from_token",
			savePayment: "http://localhost:3000/api/v1/load_account_balance_through_auth_token",
			subscribe: "http://localhost:3000/api/v1/create_subscription",
			checkExpired: "http://localhost:3000/api/v1/check_user_subscription",
			saveInLibrary: "http://localhost:3000/api/v1/add_to_reading_list",
			myLibrary: "http://localhost:3000/api/v1/my_library_book"	
		}
	}
	else {
		return {
			signIn: `http://${hostname}/api/v1/sign_in`,
			signUp: `http://${hostname}/api/v1/sign_up`,
			signOut: `http://${hostname}/api/v1/sign_out`,
			packages: `http://${hostname}/api/v1/packages`,
			category: `http://${hostname}/api/v1/category`,
			author: `http://${hostname}/api/v1/authors`,
			checkEmail: `http://${hostname}/api/v1/check_email`,
			confirmlogin: `http://${hostname}/api/v1/authors`,
		// Non authentication routes
			bestSellers: `http://${hostname}/api/v1/best_sellers`,
			allBooks: `http://${hostname}/api/v1/books`,
			premiumBooks: `http://${hostname}/api/v1/premiumbooks`,
			category: `http://${hostname}/api/v1/category`,
			packages: `http://${hostname}/api/v1/packages`,
			freeBooks: `http://${hostname}/api/v1/freebooks`,
			newlyCreatedBooks: `http://${hostname}/api/v1/newly_created_books`,
			newFreeBooks: `http://${hostname}/api/v1/new_free_books`,
			newPremiumBooks: `http://${hostname}/api/v1/new_premium_books`,
			singleBook: `http://${hostname}/api/v1/book/`,
			pages: `http://${hostname}/api/v1/pages/`,
			packages: `http://${hostname}/api/v1/packages`,
			getUserDetails: `http://${hostname}/api/v1/get_user_details_from_token`,
			savePayment: `http://${hostname}/api/v1/load_account_balance_through_auth_token`,
			subscribe: `http://${hostname}/api/v1/create_subscription`,
			checkExpired: `http://${hostname}/api/v1/check_user_subscription`,
			saveInLibrary: `http://${hostname}/api/v1/add_to_reading_list`,
			myLibrary: `http://${hostname}/api/v1/my_library_book`
		}
	}
}

export default Url


// const hostname = window && window.location && window.location.hostname;

// url = () => {
// if(hostname == "localhost"){
// 	const url = {
// 		signIn: "http://localhost:3000/api/v1/sign_in",
// 		signUp: "http://localhost:3000/api/v1/sign_up",
// 		signOut: "http://localhost:3000/api/v1/sign_out",
// 		packages: "http://localhost:3000/api/v1/packages",
// 		category: "http://localhost:3000/api/v1/category",
// 		author: "http://localhost:3000/api/v1/authors",
// 		checkEmail: "http://localhost:3000/api/v1/check_email",
// 		confirmlogin: "http://localhost:3000/api/v1/authors",
// 	// Non authentication routes
// 		bestSellers: "http://localhost:3000/api/v1/best_sellers",
// 		allBooks: "http://localhost:3000/api/v1/books",
// 		premiumBooks: "http://localhost:3000/api/v1/premiumbooks",
// 		category: "http://localhost:3000/api/v1/category",
// 		packages: "http://localhost:3000/api/v1/packages",
// 		freeBooks: "http://localhost:3000/api/v1/freebooks",
// 		newlyCreatedBooks: "http://localhost:3000/api/v1/newly_created_books",
// 		newFreeBooks: "http://localhost:3000/api/v1/new_free_books",
// 		newPremiumBooks: "http://localhost:3000/api/v1/new_premium_books",
// 		singleBook: "http://localhost:3000/api/v1/book/",
// 		pages: "http://localhost:3000/api/v1/pages/",
// 		packages: "http://localhost:3000/api/v1/packages",
// 		getUserDetails: "http://localhost:3000/api/v1/get_user_details_from_token",
// 		savePayment: "http://localhost:3000/api/v1/load_account_balance_through_auth_token",
// 		subscribe: "http://localhost:3000/api/v1/create_subscription",
// 		checkExpired: "http://localhost:3000/api/v1/check_user_subscription",
// 		saveInLibrary: "http://localhost:3000/api/v1/add_to_reading_list",
// 		myLibrary: "http://localhost:3000/api/v1/my_library_book"
// 	}
// }
// else{
// 	const url = {
// 		signIn: `http://${hostname}/api/v1/sign_in`,
// 		signUp: `http://${hostname}/api/v1/sign_up`,
// 		signOut: `http://${hostname}/api/v1/sign_out`,
// 		packages: `http://${hostname}/api/v1/packages`,
// 		category: `http://${hostname}/api/v1/category`,
// 		author: `http://${hostname}/api/v1/authors`,
// 		checkEmail: `http://${hostname}/api/v1/check_email`,
// 		confirmlogin: `http://${hostname}/api/v1/authors`,
// 	// Non authentication routes
// 		bestSellers: `http://${hostname}/api/v1/best_sellers`,
// 		allBooks: `http://${hostname}/api/v1/books`,
// 		premiumBooks: `http://${hostname}/api/v1/premiumbooks`,
// 		category: `http://${hostname}/api/v1/category`,
// 		packages: `http://${hostname}/api/v1/packages`,
// 		freeBooks: `http://${hostname}/api/v1/freebooks`,
// 		newlyCreatedBooks: `http://${hostname}/api/v1/newly_created_books`,
// 		newFreeBooks: `http://${hostname}/api/v1/new_free_books`,
// 		newPremiumBooks: `http://${hostname}/api/v1/new_premium_books`,
// 		singleBook: `http://${hostname}/api/v1/book/`,
// 		pages: `http://${hostname}/api/v1/pages/`,
// 		packages: `http://${hostname}/api/v1/packages`,
// 		getUserDetails: `http://${hostname}/api/v1/get_user_details_from_token`,
// 		savePayment: `http://${hostname}/api/v1/load_account_balance_through_auth_token`,
// 		subscribe: `http://${hostname}/api/v1/create_subscription`,
// 		checkExpired: `http://${hostname}/api/v1/check_user_subscription`,
// 		saveInLibrary: `http://${hostname}/api/v1/add_to_reading_list`,
// 		myLibrary: `http://${hostname}/api/v1/my_library_book`
// 	}
// }
// }

// export default url

// // get "/authors" => "author#authors"
// //      get "/books" => "book#books"
// //      get "/book/:id" => "book#show"
// //      get "/chapter/:id" => "book#chapter"
// //      get "/pages/:id" => "book#pages"
// //      get "/freebooks" => "book#free_books"
// //      get "/premiumbooks" => "book#premium_books"
// //      get "/best_sellers" => "book#best_sellers"
// //      get "/newly_created_books" => "book#newly_created_books"
// //      get "/new_premium_books" => "book#new_premium_books"
// //      get "/new_free_books" => "book#new_free_books"
// //      get "/category" => "category#category"
// //      get "/packages" => "package#packages"