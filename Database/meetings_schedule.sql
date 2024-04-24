-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 07:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings_schedule`
--
CREATE DATABASE IF NOT EXISTS `meetings_schedule` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meetings_schedule`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` int(11) NOT NULL,
  `teamId` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `room` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `teamId`, `startTime`, `endTime`, `description`, `room`) VALUES
(3, 3, '2023-12-07 11:10:41', '2023-12-07 13:10:41', 'Clearly outline decisions that were made.', 'Red'),
(4, 4, '2023-12-10 15:11:30', '2023-12-10 17:11:30', 'Share the meeting summary ASAP.', 'Yellow'),
(22, 1, '2023-12-20 09:31:00', '2023-12-20 11:00:00', 'Thank attendees for their input and participation.', 'Blue Room'),
(23, 1, '2023-12-12 11:00:00', '2023-12-12 13:00:00', 'Begin by summarizing the most important topics discussed.', 'Green Room'),
(24, 1, '2023-12-30 13:15:00', '2023-12-30 14:30:00', 'Include meeting action items.', 'Purple Room'),
(26, 2, '2023-12-18 09:30:00', '2023-12-18 12:05:00', 'Include the next meeting\'s date and time.', 'Blue Room'),
(27, 2, '2023-12-14 12:33:00', '2023-12-14 13:35:00', 'Share the meeting summary ASAP.', 'Green Room');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team'),
(3, 'React Team'),
(4, 'Backend Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teamId` (`teamId`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `teams` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
