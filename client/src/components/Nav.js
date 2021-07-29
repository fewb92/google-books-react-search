import React from 'react'

export default function Nav() {
    return (
            <div>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">BookSave</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">My Books</a>
                    </li>
                </ul>
            </div>
    )
}
