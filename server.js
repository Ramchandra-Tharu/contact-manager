const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 4000;
const contactRouts = require('routes/contactRouts');

app.use('/api/contacts', contactRouts);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

  