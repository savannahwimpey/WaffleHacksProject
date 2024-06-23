import React, { useState } from 'react';


function Host() {
    const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
    };


    return (
        <div className="form-container">
            <h1>Host an Event</h1>
            <h2>Tell us about your event!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question1">Choose a category for your event:</label>
                    <select
                        id="question1"
                        name="question1"
                        value={formData.question1}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="option1">Pets</option>
                        <option value="option2">Sports/Recreation</option>
                        <option value="option3">Arts/Crafts</option>
                        <option value="option3">Charity</option>
                        <option value="option3">Miscellaneous</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="question2">Set a limit for how many people can attend:</label>
                    <select
                        id="question2"
                        name="question2"
                        value={formData.question2}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="option1">15</option>
                        <option value="option2">25</option>
                        <option value="option3">35</option>
                        <option value="option3">50+</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="question3">Set a distance for who can attend:</label>
                    <select
                        id="question3"
                        name="question3"
                        value={formData.question3}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="option1">Within 1 mile</option>
                        <option value="option2">within 5 miles</option>
                        <option value="option3">within 10 miles</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="question4">Specify the date, time, and location of your event:</label>
                    <input
                        type="text"
                        id="question4"
                        name="question4"
                        value={formData.question4}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="question5">Describe your event in detail:</label>
                    <input
                        type="text"
                        id="question5"
                        name="question5"
                        value={formData.question5}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default Host;