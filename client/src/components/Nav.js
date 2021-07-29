import React from 'react'

export default function Nav() {
    return (
            <div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Google Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/my-books">My Books</a>
                    </li>
                </ul>
            </div>
    )
}
