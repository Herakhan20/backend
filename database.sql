-- Create the database if not exists
CREATE DATABASE IF NOT EXISTS accredian_db;

-- Switch to the database
USE accredian_db;

-- Create table for referrals
CREATE TABLE IF NOT EXISTS referrals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referrerName VARCHAR(255) NOT NULL,
    refereeName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optionally, insert some initial data
INSERT INTO referrals (referrerName, refereeName, email) VALUES
('John Doe', 'Jane Doe', 'john.doe@example.com'),
('Alice Smith', 'Bob Johnson', 'alice.smith@example.com');

-- Grant privileges to a user (if necessary)
-- REPLACE 'username' and 'password' with your actual MySQL username and password
GRANT ALL PRIVILEGES ON accredian_db.* TO 'username'@'localhost' IDENTIFIED BY 'password';
