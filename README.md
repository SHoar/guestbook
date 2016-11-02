# <strong>guestbook</strong>
<small>A simple guestbook SPA using vanilla JS

This Single Page Application showcases a carousel-style photo-slide, and a commenting system that can  be used whether anonymous or logged in.

# summary

My project is a Wedding Guestbook for my brother and his fiancee, who will be getting married at the end of November.
The guestbook will be a comment list from friends and family that is saved to MongoDB and comments listed on a single page View.
Only the site admins ( myself, my brother an his soon-to-be-wife) will be able to see the identifier information (names, emails, addresses,
etc.) unless they register, in which case their name will be next to their comment.

# features

<li>Visitors can post anonymously (no identifier information) or can register so that we know who to send a Thank You card to.
(An incentive for registering, hopefully! Everyone likes a personal card in the mail!)

<li>A timed-transition photo-slide will be on the top showcase container of the website, so that visitors can see how the bride and groom
look together.

<li>There will be an Admin Panel that has authorization to view user registration data as well as aggregating submitted posts with their authors.

_Bonus features:_

<li>Google Maps API links/window images for people who have submitted their addresses
Ajax modal for registering/logging in, submitting(posting)/editing comments

What libraries or packages do you think you'll use?

<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>body-parser
<li>express-session
<li>connect-flash
<li>MongoDB
<li>mongoose.js
<li>Bootstrap</ul>


Bonus:

Google Maps API

# <strong>What data will your final project use?

# Models:

User.js (for admin authentication)
Guest.js (for standard comments)
bonus: location data for Google Maps API

Collections for Users and Guests will be stored in MongoDB.

Phase 2 Bonus:

Present collection data in table format inside Admin dashboard (using Bootstrap for styling)

# Views:</h4>
<li>photo-slide showcase on front page
<li>Front Page Comments list w/ photo showcase</li>
<li>Backend Admin Panel w/ Passport-Mongoose Authentication</li>

<h4>Front Page Mock-up</h4>
![file oct 31 6 17 32 pm](https://cloud.githubusercontent.com/assets/1499951/19873645/92819aec-9f96-11e6-8e45-bbf25085540a.jpeg)
