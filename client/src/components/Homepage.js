import React from 'react';
import User from './User';
import Blog from './Blog';

function Homepage() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    < User />
                 </div>
                <div class="col-6">
                    < Blog />
                </div>
            </div>
        </div>

    );
};

export default Homepage;