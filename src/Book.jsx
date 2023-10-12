import React from 'react'

function Book() {
    return (
        <div>
            <form action='' method='post'>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Author</label>
                        <input type="text" className="form-control" name='author' aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                

            </form>

        </div>
    )
}

export default Book;