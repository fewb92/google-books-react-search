import React from 'react'

export default function BookSearch() {
    return (
        <div>
            <h1>Search Google Books</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter the title of a book" aria-label="Enter the title of a book" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}
