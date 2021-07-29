import React from 'react'

export default function Home() {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Google Books Search</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Welcome to our app!</h6>
                    <p class="card-text">By using Google Books Search you'll be able to search for books and save them to your own personal list</p>
                    <a href="/my-books" class="card-link">View My Books</a>
                    <a href="/search" class="card-link">Search for a book</a>
                </div>
            </div>
        </div>
    )
}
