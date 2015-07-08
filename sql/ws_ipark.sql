-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: Mag 09, 2014 alle 12:34
-- Versione del server: 5.1.73
-- Versione PHP: 5.3.3-7+squeeze19

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ws_ipark`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `t_alarm`
--

CREATE TABLE IF NOT EXISTS `t_alarm` (
  `id` int(11) NOT NULL,
  `alarm` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `t_alarm`
--

INSERT INTO `t_alarm` (`id`, `alarm`) VALUES
(0, '---'),
(1, 'Alarm 01'),
(2, 'Alarm 02'),
(3, 'Alarm 03'),
(4, 'Alarm 04'),
(5, 'Alarm 05'),
(6, 'Alarm 06'),
(7, 'Alarm 07'),
(8, 'Alarm 08'),
(9, 'Alarm 09'),
(10, 'Alarm 10'),
(11, 'Alarm 11'),
(12, 'Alarm 12'),
(13, 'Alarm 13'),
(14, 'Alarm 14'),
(15, 'Alarm 15'),
(16, 'Alarm 16'),
(17, 'Alarm 17'),
(18, 'Alarm 18'),
(19, 'Alarm 19'),
(20, 'Alarm 20'),
(21, 'Alarm 21'),
(22, 'Alarm 22'),
(23, 'Alarm 23'),
(24, 'Alarm 24'),
(25, 'Alarm 25'),
(26, 'Alarm 26'),
(27, 'Alarm 27'),
(28, 'Alarm 28'),
(29, 'Alarm 29'),
(30, 'Alarm 30'),
(31, 'Alarm 31'),
(32, 'Alarm 32'),
(33, 'Alarm 33'),
(34, 'Alarm 34'),
(35, 'Alarm 35'),
(36, 'Alarm 36'),
(37, 'Alarm 37'),
(38, 'Alarm 38'),
(39, 'Alarm 39'),
(40, 'Alarm 40'),
(41, 'Alarm 41'),
(42, 'Alarm 42'),
(43, 'Alarm 43'),
(44, 'Alarm 44'),
(45, 'Alarm 45'),
(46, 'Alarm 46'),
(47, 'Alarm 47'),
(48, 'Alarm 48'),
(49, 'Alarm 49'),
(50, 'Alarm 50'),
(51, 'Alarm 51'),
(52, 'Alarm 52'),
(53, 'Alarm 53'),
(54, 'Alarm 54'),
(55, 'Alarm 55'),
(56, 'Alarm 56'),
(57, 'Alarm 57'),
(58, 'Alarm 58'),
(59, 'Alarm 59'),
(60, 'Alarm 60'),
(61, 'Alarm 61'),
(62, 'Alarm 62'),
(63, 'Alarm 63'),
(64, 'Alarm 64');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_device`
--

CREATE TABLE IF NOT EXISTS `t_device` (
  `id` int(11) NOT NULL,
  `device` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `t_device`
--

INSERT INTO `t_device` (`id`, `device`) VALUES
(1, 'Elevator 1'),
(2, 'Elevator 2'),
(3, 'Elevator 3'),
(4, 'Elevator 4'),
(11, 'Shuttle 1'),
(12, 'Shuttle 2'),
(13, 'Shuttle 3'),
(14, 'Shuttle 4'),
(15, 'Shuttle 5'),
(16, 'Shuttle 6'),
(17, 'Shuttle 7'),
(18, 'Shuttle 8'),
(21, 'Cabin 1'),
(22, 'Cabin 2'),
(23, 'Cabin 3'),
(31, 'Mobile Keyboard'),
(32, 'Operator panel'),
(33, 'Web Service');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_history`
--

CREATE TABLE IF NOT EXISTS `t_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `system` int(11) NOT NULL,
  `device` int(11) NOT NULL,
  `mode` int(11) NOT NULL,
  `operation` int(11) NOT NULL,
  `stall` int(11) NOT NULL,
  `card` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `alarm` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `system` (`system`),
  KEY `device` (`device`),
  KEY `mode` (`mode`),
  KEY `operation` (`operation`),
  KEY `alarm` (`alarm`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_mode`
--

CREATE TABLE IF NOT EXISTS `t_mode` (
  `id` int(11) NOT NULL,
  `mode` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `t_mode`
--

INSERT INTO `t_mode` (`id`, `mode`) VALUES
(0, '---'),
(1, 'Manual'),
(2, '---'),
(3, '---'),
(4, 'Automatic'),
(5, '---'),
(6, '---'),
(7, '---'),
(8, '---'),
(9, 'Data intro'),
(10, 'Data reading'),
(11, 'Emergency 1'),
(12, 'Emergency 2'),
(13, 'Map'),
(14, 'Step-Step'),
(15, 'Preset mode'),
(16, '---');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_operation`
--

CREATE TABLE IF NOT EXISTS `t_operation` (
  `id` int(11) NOT NULL,
  `operation` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `t_operation`
--

INSERT INTO `t_operation` (`id`, `operation`) VALUES
(0, NULL),
(1, 'Operation UC+1'),
(2, 'Operation UC+2'),
(3, 'Operation UC+3'),
(4, 'Operation UC+4'),
(5, 'Operation UC+5'),
(6, 'Operation UC+6'),
(7, 'Operation UC+7'),
(8, 'Operation UC+8'),
(9, 'Operation UC+9'),
(10, 'Operation UC+A'),
(11, 'Operation UC+B'),
(12, 'Operation UC+C'),
(13, 'Operation UC+D'),
(14, 'Operation UC+E'),
(15, 'Operation UC+F'),
(16, NULL),
(17, NULL),
(18, NULL),
(19, NULL),
(20, NULL),
(21, 'Operation 1+B'),
(22, 'Operation 2+B'),
(23, 'Operation 3+B'),
(24, 'Operation 4+B'),
(25, 'Operation 5+B'),
(26, 'Operation 6+B'),
(27, 'Operation 7+B'),
(28, 'Operation 8+B'),
(29, 'Operation 9+B'),
(30, 'Operation 10+B'),
(31, 'Operation 11+B'),
(32, 'Operation 12+B'),
(33, 'Operation 13+B'),
(34, 'Operation 14+B'),
(35, 'Operation 15+B'),
(36, 'Operation 16+B'),
(37, 'Operation 17+B'),
(38, 'Operation 18+B'),
(39, 'Operation 19+B'),
(40, 'Operation 20+B'),
(41, 'Operation 21+B'),
(42, 'Operation 22+B'),
(43, 'Operation 23+B'),
(44, 'Operation 24+B'),
(45, 'Operation 25+B'),
(46, 'Operation 26+B'),
(47, 'Operation 27+B'),
(48, 'Operation 28+B'),
(49, 'Operation 29+B'),
(50, 'Operation 30+B'),
(51, 'Operation 31+B'),
(52, 'Operation 32+B'),
(53, NULL),
(54, NULL),
(55, NULL),
(56, NULL),
(57, NULL),
(58, NULL),
(59, NULL),
(60, 'Cycle stall+E'),
(61, 'Cycle stall+F ( in )'),
(62, 'Cycle stall+F ( out )'),
(63, 'Cycle EMC'),
(64, NULL),
(65, NULL),
(66, NULL),
(67, NULL),
(68, NULL),
(69, NULL),
(70, NULL),
(71, 'Preset 1'),
(72, 'Preset 2'),
(73, 'Preset 3'),
(74, 'Preset 4'),
(75, 'Preset 5'),
(76, 'Vertical position'),
(77, 'Horizontal position'),
(78, NULL),
(79, NULL),
(80, 'Diagnostic Log'),
(81, 'Diagnostic On'),
(82, 'Diagnostic Off'),
(83, 'Diagnostic Alarm On'),
(84, 'Diagnostic Alarm Off'),
(85, 'Diagnostic Event On'),
(86, 'Diagnostic Event Off'),
(87, NULL),
(88, NULL),
(89, NULL),
(90, 'Switch function mode'),
(91, 'System On'),
(92, 'System Off'),
(93, 'System Alarm On'),
(94, 'System Alarm Off'),
(95, 'Stall In'),
(96, 'Stall Out'),
(97, 'Stall Lock'),
(98, 'Shuffle In'),
(99, 'Shuffle Out');

--
-- Struttura della tabella `t_event`
--

CREATE TABLE IF NOT EXISTS `t_event` (
  `id` int(11) NOT NULL,
  `event` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `t_event`
--

INSERT INTO `t_event` (`id`, `event`) VALUES
(0, NULL),
(1, 'Operation UC+1'),
(2, 'Operation UC+2'),
(3, 'Operation UC+3'),
(4, 'Operation UC+4'),
(5, 'Operation UC+5'),
(6, 'Operation UC+6'),
(7, 'Operation UC+7'),
(8, 'Operation UC+8'),
(9, 'Operation UC+9'),
(10, 'Operation UC+A'),
(11, 'Operation UC+B'),
(12, 'Operation UC+C'),
(13, 'Operation UC+D'),
(14, 'Operation UC+E'),
(15, 'Operation UC+F'),
(16, NULL),
(17, NULL),
(18, NULL),
(19, NULL),
(20, NULL),
(21, 'Operation 1+B'),
(22, 'Operation 2+B'),
(23, 'Operation 3+B'),
(24, 'Operation 4+B'),
(25, 'Operation 5+B'),
(26, 'Operation 6+B'),
(27, 'Operation 7+B'),
(28, 'Operation 8+B'),
(29, 'Operation 9+B'),
(30, 'Operation 10+B'),
(31, 'Error 1'),
(32, 'Error 1'),
(33, 'Error 1'),
(34, 'Error 1'),
(35, 'Error 1'),
(36, 'Error 1'),
(37, 'Operation 17+B'),
(38, 'Operation 18+B'),
(39, 'Operation 19+B'),
(40, 'Operation 20+B'),
(41, 'Operation 21+B'),
(42, 'Operation 22+B'),
(43, 'Operation 23+B'),
(44, 'Operation 24+B'),
(45, 'Operation 25+B'),
(46, 'Operation 26+B'),
(47, 'Operation 27+B'),
(48, 'Operation 28+B'),
(49, 'Operation 29+B'),
(50, 'Operation 30+B'),
(51, 'Operation 31+B'),
(52, 'Operation 32+B'),
(53, NULL),
(54, NULL),
(55, NULL),
(56, NULL),
(57, NULL),
(58, NULL),
(59, NULL),
(60, 'Cycle stall+E'),
(61, 'Cycle stall+F ( in )'),
(62, 'Cycle stall+F ( out )'),
(63, 'Cycle EMC'),
(64, NULL),
(65, NULL),
(66, NULL),
(67, NULL),
(68, NULL),
(69, NULL),
(70, NULL),
(71, 'Preset 1'),
(72, 'Preset 2'),
(73, 'Preset 3'),
(74, 'Preset 4'),
(75, 'Preset 5'),
(76, 'Vertical position'),
(77, 'Horizontal position'),
(78, NULL),
(79, NULL),
(80, 'Diagnostic Log'),
(81, 'Diagnostic On'),
(82, 'Diagnostic Off'),
(83, 'Diagnostic Alarm On'),
(84, 'Diagnostic Alarm Off'),
(85, 'Diagnostic Event On'),
(86, 'Diagnostic Event Off'),
(87, NULL),
(88, NULL),
(89, NULL),
(90, 'Switch function mode'),
(91, 'System On'),
(92, 'System Off'),
(93, 'System Alarm On'),
(94, 'System Alarm Off'),
(95, 'Stall In'),
(96, 'Stall Out'),
(97, 'Stall Lock'),
(98, 'Shuffle In'),
(99, 'Shuffle Out');
-- --------------------------------------------------------

--
-- Limiti per la tabella `t_history`
--
ALTER TABLE `t_history`
  ADD CONSTRAINT `t_history_ibfk_1` FOREIGN KEY (`system`) REFERENCES `ws_aps`.`t_system` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_history_ibfk_2` FOREIGN KEY (`device`) REFERENCES `t_device` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_history_ibfk_3` FOREIGN KEY (`mode`) REFERENCES `t_mode` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_history_ibfk_4` FOREIGN KEY (`operation`) REFERENCES `t_operation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_history_ibfk_5` FOREIGN KEY (`alarm`) REFERENCES `t_alarm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
