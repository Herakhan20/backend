// routes/referralRoutes.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/referral
router.post('/referral', async (req, res) => {
  try {
    const { referrerName, refereeName, email } = req.body;

    // Validate input
    if (!referrerName || !refereeName || !email) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        refereeName,
        email,
      },
    });

    // Handle email notification (implement using Google Mail Service API)

    res.status(201).json(referral);
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
