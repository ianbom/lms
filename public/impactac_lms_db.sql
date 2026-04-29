-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2026 at 11:28 AM
-- Server version: 8.0.45-cll-lve
-- PHP Version: 8.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `impactac_lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_otps`
--

CREATE TABLE `admin_otps` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `otp_code` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('impactacademy-cache-0716d9708d321ffb6a00818614779e779925365c', 'i:1;', 1777352498),
('impactacademy-cache-0716d9708d321ffb6a00818614779e779925365c:timer', 'i:1777352498;', 1777352498),
('impactacademy-cache-0ade7c2cf97f75d009975f4d720d1fa6c19f4897', 'i:1;', 1774838902),
('impactacademy-cache-0ade7c2cf97f75d009975f4d720d1fa6c19f4897:timer', 'i:1774838902;', 1774838902),
('impactacademy-cache-12c6fc06c99a462375eeb3f43dfd832b08ca9e17', 'i:2;', 1777180822),
('impactacademy-cache-12c6fc06c99a462375eeb3f43dfd832b08ca9e17:timer', 'i:1777180822;', 1777180822),
('impactacademy-cache-1574bddb75c78a6fd2251d61e2993b5146201319', 'i:1;', 1774847691),
('impactacademy-cache-1574bddb75c78a6fd2251d61e2993b5146201319:timer', 'i:1774847691;', 1774847691),
('impactacademy-cache-17ba0791499db908433b80f37c5fbc89b870084b', 'i:4;', 1774867654),
('impactacademy-cache-17ba0791499db908433b80f37c5fbc89b870084b:timer', 'i:1774867654;', 1774867654),
('impactacademy-cache-1b6453892473a467d07372d45eb05abc2031647a', 'i:2;', 1770203545),
('impactacademy-cache-1b6453892473a467d07372d45eb05abc2031647a:timer', 'i:1770203545;', 1770203545),
('impactacademy-cache-7b52009b64fd0a2a49e6d8a939753077792b0554', 'i:1;', 1774840969),
('impactacademy-cache-7b52009b64fd0a2a49e6d8a939753077792b0554:timer', 'i:1774840969;', 1774840969),
('impactacademy-cache-902ba3cda1883801594b6e1b452790cc53948fda', 'i:1;', 1770630798),
('impactacademy-cache-902ba3cda1883801594b6e1b452790cc53948fda:timer', 'i:1770630798;', 1770630798),
('impactacademy-cache-91032ad7bbcb6cf72875e8e8207dcfba80173f7c', 'i:2;', 1777333179),
('impactacademy-cache-91032ad7bbcb6cf72875e8e8207dcfba80173f7c:timer', 'i:1777333179;', 1777333179),
('impactacademy-cache-9e6a55b6b4563e652a23be9d623ca5055c356940', 'i:1;', 1774932053),
('impactacademy-cache-9e6a55b6b4563e652a23be9d623ca5055c356940:timer', 'i:1774932053;', 1774932053),
('impactacademy-cache-aadesetiawan784@gmail.com|2404:c0:2447:71c5:358b:32cb:eb6c:f375', 'i:1;', 1777180942),
('impactacademy-cache-aadesetiawan784@gmail.com|2404:c0:2447:71c5:358b:32cb:eb6c:f375:timer', 'i:1777180942;', 1777180942),
('impactacademy-cache-ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'i:1;', 1770207004),
('impactacademy-cache-ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4:timer', 'i:1770207004;', 1770207004),
('impactacademy-cache-admin@gmail.com|2404:8000:1027:f0d:912b:b4b2:1d6a:4e01', 'i:1;', 1770953651),
('impactacademy-cache-admin@gmail.com|2404:8000:1027:f0d:912b:b4b2:1d6a:4e01:timer', 'i:1770953651;', 1770953651),
('impactacademy-cache-afan.kurniawan@socialimpact.id|2404:c0:2024:a732:81c6:70ec:8c50:8748', 'i:1;', 1774792404),
('impactacademy-cache-afan.kurniawan@socialimpact.id|2404:c0:2024:a732:81c6:70ec:8c50:8748:timer', 'i:1774792404;', 1774792404),
('impactacademy-cache-afan@socialimpact.id|2404:c0:5d1f:c99:f5c9:1b35:54d3:c780', 'i:1;', 1774840273),
('impactacademy-cache-afan@socialimpact.id|2404:c0:5d1f:c99:f5c9:1b35:54d3:c780:timer', 'i:1774840273;', 1774840273),
('impactacademy-cache-afankurniawan@socialimpact.id|2404:c0:2024:a732:81c6:70ec:8c50:8748', 'i:1;', 1774792391),
('impactacademy-cache-afankurniawan@socialimpact.id|2404:c0:2024:a732:81c6:70ec:8c50:8748:timer', 'i:1774792391;', 1774792391),
('impactacademy-cache-anggunintan11@gmail.com|2404:c0:212a:3b0c:49d2:32b4:bb9d:510a', 'i:2;', 1774840388),
('impactacademy-cache-anggunintan11@gmail.com|2404:c0:212a:3b0c:49d2:32b4:bb9d:510a:timer', 'i:1774840388;', 1774840388),
('impactacademy-cache-aryanridho@gmail.com|2404:c0:ba04:6e7e:8849:951e:a19f:9f12', 'i:1;', 1774793839),
('impactacademy-cache-aryanridho@gmail.com|2404:c0:ba04:6e7e:8849:951e:a19f:9f12:timer', 'i:1774793839;', 1774793839),
('impactacademy-cache-b1d5781111d84f7b3fe45a0852e59758cd7a87e5', 'i:1;', 1774840286),
('impactacademy-cache-b1d5781111d84f7b3fe45a0852e59758cd7a87e5:timer', 'i:1774840286;', 1774840286),
('impactacademy-cache-b3f0c7f6bb763af1be91d9e74eabfeb199dc1f1f', 'i:1;', 1775891486),
('impactacademy-cache-b3f0c7f6bb763af1be91d9e74eabfeb199dc1f1f:timer', 'i:1775891486;', 1775891486),
('impactacademy-cache-bd307a3ec329e10a2cff8fb87480823da114f8f4', 'i:1;', 1774842130),
('impactacademy-cache-bd307a3ec329e10a2cff8fb87480823da114f8f4:timer', 'i:1774842130;', 1774842130),
('impactacademy-cache-c1dfd96eea8cc2b62785275bca38ac261256e278', 'i:2;', 1770208252),
('impactacademy-cache-c1dfd96eea8cc2b62785275bca38ac261256e278:timer', 'i:1770208252;', 1770208252),
('impactacademy-cache-d435a6cdd786300dff204ee7c2ef942d3e9034e2', 'i:2;', 1777195485),
('impactacademy-cache-d435a6cdd786300dff204ee7c2ef942d3e9034e2:timer', 'i:1777195485;', 1777195485),
('impactacademy-cache-darmawandede47@gmail.com|2a02:26f7:dfcc:46d9:0:7000:0:b', 'i:2;', 1774840776),
('impactacademy-cache-darmawandede47@gmail.com|2a02:26f7:dfcc:46d9:0:7000:0:b:timer', 'i:1774840776;', 1774840776),
('impactacademy-cache-darmawandede47@gmail.com|2a02:26f7:dfcd:46d9:0:e000:0:4', 'i:2;', 1774843283),
('impactacademy-cache-darmawandede47@gmail.com|2a02:26f7:dfcd:46d9:0:e000:0:4:timer', 'i:1774843283;', 1774843283),
('impactacademy-cache-f1abd670358e036c31296e66b3b66c382ac00812', 'i:4;', 1774870794),
('impactacademy-cache-f1abd670358e036c31296e66b3b66c382ac00812:timer', 'i:1774870794;', 1774870794),
('impactacademy-cache-fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b', 'i:1;', 1774843366),
('impactacademy-cache-fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b:timer', 'i:1774843366;', 1774843366),
('impactacademy-cache-fawzia.ramadhani@gmail.com|125.163.4.176', 'i:1;', 1774594050),
('impactacademy-cache-fawzia.ramadhani@gmail.com|125.163.4.176:timer', 'i:1774594050;', 1774594050),
('impactacademy-cache-fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'i:2;', 1770953702),
('impactacademy-cache-fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f:timer', 'i:1770953702;', 1770953702),
('impactacademy-cache-ianalebom@gmail.com|2404:c0:b604:fcd8:1181:87dd:b96:89f0', 'i:1;', 1776153500),
('impactacademy-cache-ianalebom@gmail.com|2404:c0:b604:fcd8:1181:87dd:b96:89f0:timer', 'i:1776153500;', 1776153500),
('impactacademy-cache-ianbom@gmail.com|182.8.98.120', 'i:2;', 1774929570),
('impactacademy-cache-ianbom@gmail.com|182.8.98.120:timer', 'i:1774929570;', 1774929570),
('impactacademy-cache-info@socialimpact.id|2404:c0:b604:fcd8:9104:fb0f:5f9b:80f5', 'i:1;', 1772528352),
('impactacademy-cache-info@socialimpact.id|2404:c0:b604:fcd8:9104:fb0f:5f9b:80f5:timer', 'i:1772528352;', 1772528352),
('impactacademy-cache-irfan@socialimpact.id|2001:448a:2012:604:1b3:1b6d:e44f:dd16', 'i:3;', 1770208171),
('impactacademy-cache-irfan@socialimpact.id|2001:448a:2012:604:1b3:1b6d:e44f:dd16:timer', 'i:1770208171;', 1770208171),
('impactacademy-cache-irfanaminudin64@gmail.com|114.124.210.184', 'i:1;', 1770628060),
('impactacademy-cache-irfanaminudin64@gmail.com|114.124.210.184:timer', 'i:1770628060;', 1770628060),
('impactacademy-cache-mk.anggun.sari@pertamina.com|2404:c0:212a:3b0c:49d2:32b4:bb9d:510a', 'i:1;', 1774840447),
('impactacademy-cache-mk.anggun.sari@pertamina.com|2404:c0:212a:3b0c:49d2:32b4:bb9d:510a:timer', 'i:1774840447;', 1774840447),
('impactacademy-cache-nisrina19007@mail.unpad.ac.id|2001:448a:2012:604:412e:1182:3a73:b01f', 'i:2;', 1770208227),
('impactacademy-cache-nisrina19007@mail.unpad.ac.id|2001:448a:2012:604:412e:1182:3a73:b01f:timer', 'i:1770208227;', 1770208227),
('impactacademy-cache-ratnasariputri.utm@gmail.com|36.83.112.164', 'i:2;', 1774840568),
('impactacademy-cache-ratnasariputri.utm@gmail.com|36.83.112.164:timer', 'i:1774840568;', 1774840568),
('impactacademy-cache-teamwebcareindonesia@gmail.com|2404:c0:b604:fcd8:1181:87dd:b96:89f0', 'i:1;', 1776153506),
('impactacademy-cache-teamwebcareindonesia@gmail.com|2404:c0:b604:fcd8:1181:87dd:b96:89f0:timer', 'i:1776153506;', 1776153506),
('impactacademy-cache-tiarahmaputrii@gmail.com|103.144.179.50', 'i:2;', 1774838807),
('impactacademy-cache-tiarahmaputrii@gmail.com|103.144.179.50:timer', 'i:1774838807;', 1774838807),
('impactacademy-cache-triapriansyah@gmail.com|114.10.143.44', 'i:1;', 1775891118),
('impactacademy-cache-triapriansyah@gmail.com|114.10.143.44:timer', 'i:1775891118;', 1775891118);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(140) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Sertifikasi BNSP', 'sertifikasi-bnsp', 'Program sertifikasi kompetensi profesi standar nasional yang diakui secara resmi.', '2026-02-04 10:58:13', '2026-02-04 10:58:13'),
(2, 'Impact Measurement', 'impact-measurement', 'Pelajari cara mengukur, mengelola, dan melaporkan dampak sosial dan lingkungan.', '2026-02-04 10:58:13', '2026-02-04 10:58:13'),
(4, 'ESG', 'esg', 'Pahami prinsip Environmental, Social, dan Governance untuk bisnis yang berkelanjutan.', '2026-02-04 10:58:13', '2026-02-04 10:58:13'),
(8, 'Community Involvement and Development', 'community-involvement-and-development', NULL, '2026-02-23 07:07:58', '2026-02-23 07:07:58'),
(9, 'Carbon Footprint', 'carbon-footprint', NULL, '2026-03-03 08:32:20', '2026-03-03 08:32:20'),
(10, 'Leadership in Sustainability', 'leadership-in-sustainability', NULL, '2026-03-04 06:24:56', '2026-03-04 06:24:56'),
(11, 'Program Pengembangan Masyarakat', 'program-pengembangan-masyarakat', NULL, '2026-03-06 02:11:15', '2026-03-06 02:11:15'),
(12, 'Blue Economy', 'blue-economy', NULL, '2026-03-09 04:37:33', '2026-03-09 04:37:33'),
(19, 'Impact Management', 'impact-management', NULL, '2026-04-18 16:42:01', '2026-04-18 16:42:01'),
(20, 'Sustainability Initiatives', 'sustainability-initiatives', NULL, '2026-04-21 09:28:23', '2026-04-21 09:28:23');

-- --------------------------------------------------------

--
-- Table structure for table `certificate_issuances`
--

CREATE TABLE `certificate_issuances` (
  `id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `issued_code` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issued_at` timestamp NOT NULL,
  `file_url` varchar(600) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `certificate_issuances`
--

INSERT INTO `certificate_issuances` (`id`, `class_id`, `user_id`, `issued_code`, `issued_at`, `file_url`, `created_at`, `updated_at`) VALUES
(1, 4, 9, 'CERT-XGQM0IXA', '2026-03-31 03:34:10', NULL, '2026-03-31 03:34:10', '2026-03-31 03:34:10'),
(2, 4, 16, 'CERT-TLXNLGZV', '2026-03-31 11:36:38', NULL, '2026-03-31 11:36:38', '2026-03-31 11:36:38');

-- --------------------------------------------------------

--
-- Table structure for table `certificate_settings`
--

CREATE TABLE `certificate_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `template_url` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` bigint UNSIGNED NOT NULL,
  `created_by` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(220) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `price` bigint NOT NULL DEFAULT '0',
  `discount` int NOT NULL DEFAULT '0',
  `price_final` bigint DEFAULT NULL,
  `thumbnail_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('draft','published') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_priority` tinyint(1) NOT NULL DEFAULT '0',
  `url_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `implementation_date` date DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `created_by`, `category_id`, `type`, `title`, `slug`, `description`, `price`, `discount`, `price_final`, `thumbnail_url`, `status`, `location`, `is_priority`, `url_link`, `implementation_date`, `published_at`, `created_at`, `updated_at`) VALUES
(4, 2, 1, 'e-learning', 'Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 'sertifikasi-bnsp-pelaksana-program-pemberdayaan-masyarakat', '<p>Banyak program pemberdayaan berjalan, tetapi belum semuanya menghasilkan dampak nyata karena kompetensi pelaksananya belum terstandar. Saatnya naik kelas. Impact Academy menghadirkan Sertifikasi Pelaksana Program Pemberdayaan Masyarakat bersama LSP dan BNSP untuk memperkuat skill teknis, pemahaman lapangan, dan kemampuan perencanaan agar setiap program dijalankan lebih profesional, terukur, dan berdampak.</p>', 9200000, 0, 9200000, '/storage/classes/thumbnails/pT7ozkExuUi6LfU8vYtzMEW9IoEvT2cvonju1Hkd.jpg', 'published', NULL, 1, NULL, NULL, '2026-02-04 09:14:46', '2026-02-04 07:33:30', '2026-04-27 10:07:05'),
(5, 2, 4, 'webinar', 'From Impact to Recognition', 'from-impact-to-recognition', 'Program Corporate Social Responsibility (CSR) saat ini bukan hanya mengenai kewajiban, tapi juga menjadi bagian strategis dalam mendukung keberlanjutan bisnis perusahaan. CSR juga tidak hanya berfokus pada pelaksanaan program sosial, melainkan dituntut untuk mampu menciptakan dampak yang terukur, relevan dengan kebutuhan masyarakat, serta selaras dengan arah dan tujuan perusahaan.\r\n\r\nSeiring dengan meningkatnya perhatian terhadap aspek Environmental, Social, and Governance (ESG), peran CSR semakin krusial sebagai instrumen implementasi strategi ESG perusahaan, khususnya pada pilar sosial dan tata kelola. Integrasi CSR ke dalam kebijakan, perencanaan, dan tata kelola perusahaan menjadi kunci untuk memastikan konsistensi program, kepatuhan terhadap regulasi, serta keberlanjutan dampak yang dihasilkan.', 0, 0, 0, '/storage/classes/thumbnails/yqd3ttvS83f8wx6OrHFSuAydHBtAVjtKJqg9Xmln.jpg', 'published', NULL, 0, NULL, NULL, '2026-02-18 02:36:51', '2026-02-18 02:29:07', '2026-03-06 04:00:54'),
(6, 2, 8, 'webinar', 'Beyond Programs, Creating Impact', 'beyond-programs-creating-impact', '<p>Pemenuhan gizi merupakan salah satu isu fundamental dalam pembangunan manusia yang berkelanjutan. Tantangan ini membutuhkan keterlibatan multipihak, melalui program sosial yang tidak hanya bersifat bantuan, tetapi dirancang secara strategis, berbasis komunitas, dan menghasilkan dampak yang terukur. Program sosial di bidang gizi perlu diintegrasikan dengan strategi TJSL dan sustainability perusahaan agar mampu menjawab kebutuhan masyarakat secara berkelanjutan. Pemenuhan gizi yang optimal, khususnya pada periode awal kehidupan, menjadi kunci utama dalam upaya pencegahan stunting. Stunting tidak hanya berdampak pada pertumbuhan fisik anak, tetapi juga berpengaruh terhadap perkembangan kognitif, produktivitas, dan kualitas sumber daya manusia di masa depan. Oleh karena itu, program sosial di bidang gizi perlu dirancang secara komprehensif, berbasis data, dan melibatkan komunitas sebagai aktor utama, agar intervensi yang dilakukan tepat sasaran, berkelanjutan, dan mampu memberikan dampak jangka panjang dalam menurunkan risiko stunting.</p>', 0, 0, 0, '/storage/classes/thumbnails/HlgByhJNEkFYdLZrBHTmkm9rqKb98nE0njAteHos.jpg', 'published', NULL, 0, NULL, NULL, '2026-02-23 07:28:00', '2026-02-23 07:25:51', '2026-03-11 05:19:07'),
(8, 2, 8, 'webinar', 'Dana, Dampak dan Tanggung  Jawab', 'dana-dampak-dan-tanggung-jawab', 'Sektor keuangan berperan strategis membangun ekonomi inklusif dan berkelanjutan. Lewat TJSL, institusi finansial mampu menyalurkan dana yang menghasilkan nilai bisnis sekaligus dampak sosial nyata. Di Impact Talks #8 bertajuk “Dana, Dampak, dan Tanggung Jawab”, pelajari praktik integrasi keuangan bertanggung jawab langsung dari Adrian Wishnu Paranngi (Indonesia Financial Group) dan Agusman Muhammad Latif dari PT Bank Rakyat Indonesia (Persero) Tbk.', 0, 0, 0, '/storage/classes/thumbnails/iuNifwLPce7BcB4q2G6Nt9V7SkoV9RJjubL3m1cN.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-02 06:53:40', '2026-03-02 06:50:18', '2026-03-06 03:52:24'),
(9, 2, 8, 'webinar', 'Ruang Budaya, Ruang Bersama', 'ruang-budaya-ruang-bersama', 'Budaya adalah jembatan yang menyatukan makna, identitas, dan keberlanjutan. Agar tetap hidup dan berdampak, pelestarian budaya memerlukan sinergi lintas sektor. Dalam Impact Talks #10, kita mengulas bagaimana Tanggung Jawab Sosial dan Lingkungan mendorong cultural impact—memperkuat jati diri lokal, menjaga warisan tradisi, serta memberdayakan komunitas dan ekosistemnya—bersama Ismiyati dan Siti Chotijah. Temukan perspektif, strategi, dan inspirasi praktik nyata yang bisa direplikasi.', 0, 0, 0, '/storage/classes/thumbnails/A6MiVxiqVnv05B3zxnL64Q4IGaPefTjckl3ozkmf.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-02 07:36:22', '2026-03-02 07:28:05', '2026-03-06 04:03:58'),
(11, 2, 8, 'webinar', 'From Commitment to Impact', 'from-commitment-to-impact', '<p>Bagaimana sustainability dijalankan nyata di sektor energi? Melalui Impact Talks #13, Anda akan memperoleh insight tentang strategi keberlanjutan dan community involvement &amp; development dari tahap perencanaan hingga dampak terukur bagi masyarakat dan bisnis. Peserta juga diajak menelaah studi kasus implementatif lintas industri. Simak penjelasan selengkapnya bersama praktisi berpengalaman: Prima Retno Ardhanie — Vice President TJSL PT PLN (Persero); dan Ibrahim Arsyad — Senior Manager Sustainability &amp; Performance Excellence Medco E&amp;P Indonesia.</p>', 0, 0, 0, '/storage/classes/thumbnails/kcQ3XPcQBMDNkVZXQbfgLm4oH5QHURRKIq3dUDRd.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-02 08:00:53', '2026-03-02 07:59:31', '2026-03-11 05:20:26'),
(13, 2, 20, 'webinar', 'Driving the Impact of Sustainability', 'driving-the-impact-of-sustainability', '<p>Bagaimana kolaborasi lintas sektor mampu mempercepat penurunan emisi karbon? Perubahan iklim menuntut strategi bersama dan aksi kolektif yang terarah. Dalam sesi ini, Anda akan mendalami langkah konkret dekarbonisasi dari sisi riset, kebijakan, hingga implementasi teknis di lapangan. Impact Talks #9 “Driving the Impact of Sustainability” menghadirkan diskusi inspiratif bersama narasumber berpengalaman untuk mendorong dampak keberlanjutan yang nyata dan terukur.</p>', 0, 0, 0, '/storage/classes/thumbnails/sJEZA7dnrjuwoGIOMhsrXYNSuwhJHW1EsVJqEYFS.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-03 09:12:05', '2026-03-03 08:42:43', '2026-04-21 09:28:59'),
(14, 2, 8, 'webinar', 'No One Left Behind', 'no-one-left-behind', '<p>Webinar No One Left Behind mengajak Anda memperkuat inklusivitas melalui strategi TJSL dan kolaborasi sosial yang berdampak. Keberlanjutan berarti memastikan setiap kelompok terlibat dan merasakan manfaatnya. Ikuti pembelajaran interaktif bersama Andromedo Cahyo Purnomo (Officer I CSR &amp; SMEPP PT Kilang Pertamina Internasional RU VI Balongan) dan Intan Nugrahaini Putri (Manager Komunikasi dan TJSL PT PLN Persero UID Jakarta Raya) untuk memperluas perspektif dan praktik nyata.</p>', 0, 0, 0, '/storage/classes/thumbnails/3WbMZwS1xO02D3JGJPavetSBSwiJ9I8raWUFa79Z.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-03 09:41:03', '2026-03-03 09:32:48', '2026-03-11 05:20:56'),
(15, 2, 10, 'webinar', 'Woman in Sustainability', 'woman-in-sustainability', 'Woman in Sustainability menghadirkan perspektif segar tentang kepemimpinan perempuan dalam mendorong praktik keberlanjutan dan implementasi ESG. Bagaimana perubahan terjadi saat lebih banyak perempuan terlibat dalam pengambilan keputusan strategis? Dalam sesi ini, Lucia Karina (Coca-Cola Europacific Partners), Nurafifah (PT Pegadaian), dan Dr. Ir. Amalia Yunita (Arus Liar & Bravo Glamping) berbagi pengalaman, tantangan, serta strategi membangun masa depan yang inklusif dan berkelanjutan.', 0, 0, 0, '/storage/classes/thumbnails/z7dT7rGV4lsKlSTx4HUbUnBDAYpaX5P3hsU0Daqa.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-04 08:39:45', '2026-03-04 06:30:54', '2026-03-04 08:39:45'),
(16, 2, 4, 'webinar', 'ESG: Challenge and Impact', 'esg-challenge-and-impact', '<p>Dunia bisnis bergerak cepat menuju standar baru: ESG (Environmental, Social, and Governance). Isu keberlanjutan kini menjadi tolok ukur reputasi, daya saing, dan kepercayaan publik. Regulasi makin ketat, ekspektasi konsumen meningkat, dan perusahaan dituntut membuktikan dampak nyata. Lewat Impact Talks, pelajari tantangan dan strategi implementasi ESG bersama Abi Nisaka dari PT Kalbe Farma Tbk dan Imad Zaky Mubarak dari PT Jasa Marga (Persero) Tbk.</p>', 0, 0, 0, '/storage/classes/thumbnails/kovkAOYKvJTh1Dl8TLZzGZh5fBxgNpgNEa8Ei4WD.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-04 09:35:44', '2026-03-04 09:32:56', '2026-03-11 05:19:57'),
(17, 2, 11, 'webinar', 'Peran Program Pengembangan Masyarakat di Industri Hulu Migas Terhadap Kesejahteraan Masyarakat', 'peran-program-pengembangan-masyarakat-di-industri-hulu-migas-terhadap-kesejahteraan-masyarakat', 'Program Pengembangan Masyarakat (PPM) di industri hulu migas telah menjadi bagian penting dari komitmen perusahaan Kontraktor Kontrak Kerja Sama (KKKS) dalam membangun hubungan yang harmonis dengan masyarakat dan pemangku kepentingan. Namun dalam praktiknya, berbagai tantangan sering muncul, mulai dari pengelolaan ekspektasi masyarakat hingga memastikan program benar-benar memberi dampak nyata. Melalui Impact Talks, tiga praktisi berpengalaman akan membahas strategi, tantangan, dan dampak implementasi PPM bagi perusahaan maupun masyarakat di sekitar wilayah operasi.', 0, 0, 0, '/storage/classes/thumbnails/9G2lcw0FJO44MgK0oO7l6u6dhKalIppZDtSdNOeQ.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-06 02:19:57', '2026-03-06 02:17:44', '2026-03-06 02:19:57'),
(18, 2, 20, 'webinar', 'Blue Economy', 'blue-economy', '<p>Indonesia memiliki kekayaan laut dan pesisir yang luar biasa besar. Namun, bagaimana cara memanfaatkannya tanpa merusak keberlanjutan alam? Konsep blue economy hadir sebagai pendekatan yang menyeimbangkan pertumbuhan ekonomi maritim dengan tanggung jawab menjaga ekosistem serta meningkatkan kesejahteraan masyarakat pesisir. Dalam Impact Talks #5, para ahli membahas peluang besar sekaligus tantangan nyata dalam menerapkan blue economy di Indonesia, serta bagaimana strategi kolaboratif dapat mendorong pengelolaan laut yang berkelanjutan di masa depan.</p>', 0, 0, 0, '/storage/classes/thumbnails/CK4qR5UGv57EyGUvpObmnxmGjr8zqyxF2GoRAvZ4.jpg', 'published', NULL, 0, NULL, NULL, '2026-03-09 04:51:32', '2026-03-09 04:49:18', '2026-04-21 09:29:30'),
(19, 4, 19, 'e-learning', 'Designing CSR Programs that Creating Shared Value (CSV)', 'package-learning-test', '<p>Impact Academy menghadirkan topik <strong>Designing CSR Programs that Creating Shared Value</strong> bersama praktisi berpengalaman untuk membahas bagaimana konsep Creating Shared Value (CSV) dapat diimplementasikan secara strategis dalam perancangan program CSR. Topik ini akan mengupas cara mengintegrasikan kepentingan bisnis dan kebutuhan sosial secara selaras, sehingga program tidak hanya berdampak, tetapi juga berkelanjutan dan memberikan nilai tambah bagi perusahaan maupun masyarakat. Peserta akan mendapatkan insight praktis mulai dari perumusan ide, pemetaan stakeholder, hingga pengukuran dampak yang relevan dan terukur.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/U6wGunHVWO6ws2IWgcJI89mot250eq9BY0QcvOcc.jpg', 'published', NULL, 1, NULL, '2026-02-15', '2026-03-09 13:48:38', '2026-03-09 13:47:00', '2026-04-27 09:22:45'),
(20, 2, 19, 'e-learning', 'Theory of Change for Impactful CSR Programs', 'theory-of-change-for-impactful-csr-programs', '<p>Theory of Change (ToC) adalah pendekatan strategis yang membantu memetakan bagaimana sebuah program atau intervensi dapat menghasilkan perubahan yang nyata dan terukur. Melalui analisis hubungan sebab-akibat yang berbasis bukti, ToC menjelaskan proses perubahan secara lebih sistematis. Pendekatan ini juga membantu mengidentifikasi akar permasalahan yang menghambat kemajuan sekaligus menentukan strategi dan solusi yang paling tepat untuk menciptakan dampak yang berkelanjutan.</p>', 299000, 0, 299000, '/storage/classes/thumbnails/uMUboODQXF6Hc4wUCaThKvIFZKEB7iX0oPDEAUov.jpg', 'published', NULL, 1, NULL, '2026-04-12', '2026-03-10 06:15:09', '2026-03-10 06:14:53', '2026-04-27 09:16:14'),
(21, 2, 19, 'e-learning', 'Designing Impactful CID Programs using the Logical Framework Approach (LFA)', 'designing-impactful-cid-programs-using-the-logical-framework-approach-lfa', '<p>Logical Framework Approach (LFA) pertama kali dikembangkan oleh USAID pada akhir 1960-an sebagai kerangka berpikir untuk merancang program pembangunan secara lebih sistematis. Metode ini kemudian diadopsi secara luas oleh berbagai lembaga pembangunan internasional, termasuk CIDA dan negara-negara anggota DAC. Di Indonesia, LFA diperkenalkan kepada para mitra pembangunan sebagai alat bantu perencanaan program yang memetakan hubungan antara input, output, hingga tujuan program. Melalui ringkasan visual yang terstruktur, LFA membantu pengambil keputusan merancang proyek secara lebih jelas, terarah, dan terukur.</p>', 499000, 0, 499000, '/storage/classes/thumbnails/H23IeW7pqyPwIq8zmj3anlxejmniD5Hd8DtO86OC.jpg', 'published', NULL, 1, NULL, '2026-04-13', '2026-03-10 06:19:19', '2026-03-10 06:18:58', '2026-04-28 06:19:56'),
(22, 2, 2, 'e-learning', 'Measuring CID Programs using Community Satisfaction Index (IKM)', 'measuring-community-involvement-and-development-programs-using-community-satisfaction-index-ikm', '<p>Impact Academy menghadirkan topik <strong>Measuring CID Programs Using Community Satisfaction Index (IKM) </strong>bersama praktisi berpengalaman untuk mengupas peran IKM sebagai alat ukur utama dalam menilai keterlibatan dan kepuasan masyarakat terhadap program.</p><p>IKM digunakan untuk menangkap persepsi langsung dari penerima manfaat terhadap kualitas program yang dijalankan. Melalui pengukuran yang sistematis, IKM membantu mengidentifikasi tingkat partisipasi, relevansi program dengan kebutuhan masyarakat, serta kualitas layanan yang dirasakan.</p><p>Hasil pengukuran ini menjadi dasar penting bagi organisasi untuk melakukan evaluasi berbasis data, meningkatkan efektivitas program, serta memastikan bahwa setiap intervensi yang dilakukan benar-benar memberikan nilai bagi masyarakat sasaran.</p>', 499000, 0, 499000, '/storage/classes/thumbnails/g5Eb2imNcsy9cxOAVNwfnCbw568BqEjzYcoUxJd6.jpg', 'published', NULL, 1, NULL, NULL, '2026-04-13 04:04:37', '2026-04-13 03:51:53', '2026-04-27 09:31:52'),
(23, 2, 2, 'learning-package', 'Impact Measurement using Social Return on Investment (SROI)', 'impact-measurement-usiang-social-return-on-investment-sroi', '<p>Impact Academy menghadirkan pembelajaran <em>Impact Measurement using Social Return on Investment (SROI)</em> bersama praktisi berpengalaman untuk mengupas bagaimana SROI digunakan secara komprehensif dalam menilai nilai sosial, ekonomi, dan lingkungan dari sebuah program. Melalui pendekatan berbasis data, SROI membantu organisasi mengukur efektivitas intervensi, mengonversi dampak menjadi nilai yang terukur, serta menyusun narasi dampak yang kuat untuk pengambilan keputusan strategis dan komunikasi kepada para pemangku kepentingan.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/ApQXV1K74KcEKrFAZfTWxS8CIFcrjudUKL2plgy4.jpg', 'published', NULL, 1, NULL, NULL, '2026-04-13 05:04:41', '2026-04-13 04:49:09', '2026-04-27 09:47:43'),
(24, 2, 19, 'e-learning', 'Conduct Social Mapping to Create Sustainable Impact Program', 'conduct-social-mapping-to-create-sustainable-impact-program', '<p>Impact Academy menghadirkan topik <strong>Conduct Social Mapping to Create Sustainable Impact Program</strong> bersama praktisi berpengalaman untuk membahas bagaimana Social Mapping menjadi fondasi dalam merancang program berdampak, melalui pemetaan kondisi sosial, analisis kebutuhan pemangku kepentingan, serta penyusunan intervensi yang lebih tepat, terukur, dan berkelanjutan.</p>', 299000, 0, 299000, '/storage/classes/thumbnails/n6xSwEMSXkhKhBu60AJt0hW5ihEWqVQ1XuOOmLx1.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-17 03:06:33', '2026-04-17 02:52:26', '2026-04-27 09:51:50'),
(25, 2, 19, 'learning-package', 'Mastering CSR Based on ISO 26000 for Sustainability Strategy', 'mastering-csr-based-on-iso-26000', '<p>Impact Academy menghadirkan topik <strong>Mastering CSR Based on ISO 26000 for Sustainability Strategy</strong> bersama praktisi berpengalaman untuk membahas bagaimana ISO 26000 menjadi panduan strategis dalam merancang, mengimplementasikan, dan mengevaluasi program CSR yang berdampak, terukur, serta selaras dengan prinsip keberlanjutan dan kebutuhan pemangku kepentingan.</p>', 1499000, 0, 1499000, '/storage/classes/thumbnails/a2PC6KnZWgDNpdM1ErHidBablOaSzdVqCrhg55pt.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-17 04:14:43', '2026-04-17 04:13:56', '2026-04-29 04:06:16'),
(26, 2, 2, 'learning-package', 'Monitoring, Evaluation & Learning for Sustainable Impact Program', 'monitoring-evaluation-learning-for-sustainable-impact-program', '<p>Impact Academy menghadirkan topik <strong>Monitoring, Evaluation &amp; Learning for Sustainable Impact Program</strong> bersama praktisi berpengalaman untuk membahas bagaimana MEL digunakan sebagai pendekatan strategis dalam merancang, mengukur, dan mengoptimalkan dampak program secara berkelanjutan, berbasis data, serta adaptif terhadap dinamika kebutuhan stakeholder.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/YOISSYf7PjUIIXg6j1Zl8BR31SJypy0Y3O1tj5LE.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-17 04:18:32', '2026-04-17 04:18:14', '2026-04-29 04:15:26'),
(27, 2, 19, 'learning-package', 'ESG Fundamental and Strategy', 'esg-fundamental-and-strategy', '<p>Impact Academy menghadirkan topik <strong>ESG Fundamental and Strategy</strong> bersama praktisi berpengalaman untuk membahas bagaimana ESG menjadi kerangka strategis dalam mengintegrasikan aspek lingkungan, sosial, dan tata kelola ke dalam proses bisnis, sekaligus mendorong keberlanjutan, pengelolaan risiko, serta penciptaan nilai jangka panjang bagi perusahaan dan pemangku kepentingan.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/rn5FHYF4zAuqINw4IegWpzGMWkc4eQXeYIsnfEY5.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-17 04:21:42', '2026-04-17 04:21:28', '2026-04-29 04:26:13'),
(28, 2, 19, 'learning-package', 'Exit Strategy: Designing Sustainable Impact Program for Sustainability', 'exit-strategy-designing-sustainable-impact-program-for-sustainability', '<p>Impact Academy menghadirkan topik Exit Strategy: Designing Sustainable Impact Program for Sustainability bersama praktisi berpengalaman untuk membahas bagaimana exit strategy dirancang secara strategis sejak awal program guna memastikan keberlanjutan dampak, kemandirian komunitas, serta kesinambungan nilai yang telah dibangun meskipun intervensi program telah berakhir.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/qIyv5yMp2TTpP1Z756gZtU7al9X1lyWlvztOIVI4.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-17 04:28:07', '2026-04-17 04:27:52', '2026-04-20 06:31:28'),
(29, 2, 20, 'learning-package', 'Driving Business Sustainability through Integrated CSR and ESG', 'driving-business-sustainability-through-integrated-csr-and-esg', '<p>Impact Academy menghadirkan topik <strong>Driving Business Sustainability through Integrated CSR and ESG</strong> bersama praktisi berpengalaman untuk membahas bagaimana perusahaan dapat mengintegrasikan strategi Corporate Social Responsibility (CSR) dan Environmental, Social, and Governance (ESG) secara holistik ke dalam model bisnis, sehingga mampu menciptakan nilai jangka panjang, meningkatkan daya saing, serta menghasilkan dampak yang terukur bagi bisnis dan masyarakat.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/o0iFeygjVjZVHQ7i8261fiwaJTQ4AlW9zK4esO1P.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-21 09:53:43', '2026-04-21 09:37:27', '2026-04-29 04:13:53'),
(30, 2, 20, 'learning-package', 'Designing a Sustainability Roadmap for Competitive and Responsible Business', 'designing-a-sustainability-roadmap-for-competitive-and-responsible-business', '<p>Impact Academy menghadirkan topik <strong>Designing a Sustainability Roadmap for Competitive and Responsible Business</strong> bersama praktisi berpengalaman untuk membahas bagaimana merancang peta jalan keberlanjutan yang terstruktur, terukur, dan selaras dengan strategi bisnis, mulai dari identifikasi isu material, integrasi prinsip keberlanjutan ke dalam model bisnis, hingga penetapan target dan indikator kinerja yang mampu meningkatkan daya saing sekaligus menciptakan dampak yang bertanggung jawab.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/XzSJY7ZJnkkaJMywllSdkKcK8prrnnr0NXjdC7zI.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-21 09:53:07', '2026-04-21 09:40:31', '2026-04-29 04:18:19'),
(31, 2, 10, 'learning-package', 'Effective Communication for Sustainability Initiatives', 'effective-communication-for-sustainability-initiatives', '<p>Impact Academy menghadirkan topik <strong>Effective Communication for Sustainability Initiatives </strong>bersama praktisi berpengalaman untuk membahas strategi komunikasi yang mampu menerjemahkan nilai keberlanjutan menjadi pesan yang kuat, relevan, dan mudah dipahami oleh berbagai pemangku kepentingan, sehingga inisiatif yang dijalankan tidak hanya diketahui, tetapi juga dipahami, didukung, dan memberikan dampak yang lebih luas.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/DaWg9llTYP4zeW6XWLMJAQ7oRcCEwxJbR9xzfajf.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-21 09:59:32', '2026-04-21 09:43:39', '2026-04-29 04:23:22'),
(32, 2, 19, 'learning-package', 'Strategic Stakeholder Engagement for Sustainable Impact Programs', 'strategic-stakeholder-engagement-for-sustainable-impact-programs', '<p>Impact Academy menghadirkan topik <strong>Strategic Stakeholder Engagement for Sustainable Impact Programs</strong> bersama praktisi berpengalaman untuk membahas bagaimana mengidentifikasi, memetakan, dan mengelola stakeholder secara strategis guna memastikan keberhasilan dan keberlanjutan program. Peserta akan mempelajari pendekatan praktis dalam membangun keterlibatan yang bermakna, mengelola dinamika kepentingan, serta menciptakan kolaborasi yang mampu menghasilkan dampak sosial yang terukur dan berkelanjutan.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/so5IMTL5TQR05mpBPnY8ET1ADyA9DcB1N1JU0j7r.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-21 10:01:24', '2026-04-21 09:50:00', '2026-04-29 04:02:05'),
(33, 2, 2, 'learning-package', 'Sustainable Livelihood Impact Assessment', 'sustainable-livelihood-impact-assessment', '<p>Impact Academy menghadirkan topik <strong>Sustainable Livelihood Impact Assessment</strong> bersama praktisi berpengalaman untuk membahas pendekatan strategis dalam mengukur dan mengelola dampak program terhadap keberlanjutan mata pencaharian masyarakat. Topik ini akan mengupas bagaimana merancang indikator yang relevan, melakukan analisis berbasis data, hingga menerjemahkan hasil assessment menjadi rekomendasi yang aplikatif bagi penguatan program CSR, ESG, maupun inisiatif pembangunan berkelanjutan.</p>', 999000, 0, 999000, '/storage/classes/thumbnails/KgeBLJmszJf0PPsIx4gQMwvlFkdBbdTJebESnAIP.jpg', 'published', NULL, 0, NULL, NULL, '2026-04-21 10:02:03', '2026-04-21 09:51:51', '2026-04-29 04:00:31');

-- --------------------------------------------------------

--
-- Table structure for table `class_mentors`
--

CREATE TABLE `class_mentors` (
  `id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `mentor_id` bigint UNSIGNED NOT NULL,
  `sort_order` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `class_mentors`
--

INSERT INTO `class_mentors` (`id`, `class_id`, `mentor_id`, `sort_order`, `created_at`, `updated_at`) VALUES
(7, 4, 5, 1, '2026-02-04 11:59:34', '2026-02-04 11:59:34'),
(8, 4, 1, 1, '2026-02-04 11:59:34', '2026-02-04 11:59:34'),
(13, 13, 3, 1, '2026-03-03 09:12:05', '2026-03-03 09:12:05'),
(14, 14, 6, 1, '2026-03-03 09:41:03', '2026-03-03 09:41:03'),
(15, 14, 7, 1, '2026-03-03 09:41:03', '2026-03-03 09:41:03'),
(16, 15, 8, 1, '2026-03-04 06:30:54', '2026-03-04 06:30:54'),
(17, 15, 9, 1, '2026-03-04 06:30:54', '2026-03-04 06:30:54'),
(18, 15, 10, 1, '2026-03-04 06:30:54', '2026-03-04 06:30:54'),
(19, 16, 11, 1, '2026-03-04 09:35:39', '2026-03-04 09:35:39'),
(20, 16, 12, 1, '2026-03-04 09:35:39', '2026-03-04 09:35:39'),
(21, 17, 13, 1, '2026-03-06 02:17:44', '2026-03-06 02:17:44'),
(22, 17, 14, 1, '2026-03-06 02:17:44', '2026-03-06 02:17:44'),
(23, 17, 15, 1, '2026-03-06 02:17:44', '2026-03-06 02:17:44'),
(24, 8, 19, 1, '2026-03-06 03:52:24', '2026-03-06 03:52:24'),
(25, 8, 18, 1, '2026-03-06 03:52:24', '2026-03-06 03:52:24'),
(26, 11, 17, 1, '2026-03-06 03:55:17', '2026-03-06 03:55:17'),
(27, 11, 16, 1, '2026-03-06 03:55:17', '2026-03-06 03:55:17'),
(28, 5, 20, 1, '2026-03-06 04:00:54', '2026-03-06 04:00:54'),
(29, 5, 21, 1, '2026-03-06 04:00:54', '2026-03-06 04:00:54'),
(30, 5, 22, 1, '2026-03-06 04:00:54', '2026-03-06 04:00:54'),
(31, 9, 23, 1, '2026-03-06 04:03:58', '2026-03-06 04:03:58'),
(32, 9, 24, 1, '2026-03-06 04:03:58', '2026-03-06 04:03:58'),
(33, 6, 25, 1, '2026-03-06 04:52:02', '2026-03-06 04:52:02'),
(34, 6, 26, 1, '2026-03-06 04:52:02', '2026-03-06 04:52:02'),
(35, 18, 29, 1, '2026-03-09 04:49:18', '2026-03-09 04:49:18'),
(36, 18, 30, 1, '2026-03-09 04:49:18', '2026-03-09 04:49:18'),
(37, 19, 5, 1, '2026-03-09 13:47:00', '2026-03-09 13:47:00'),
(38, 20, 1, 1, '2026-03-10 06:14:53', '2026-03-10 06:14:53'),
(39, 21, 5, 1, '2026-03-10 06:18:58', '2026-03-10 06:18:58'),
(40, 22, 2, 1, '2026-04-13 03:51:53', '2026-04-13 03:51:53'),
(42, 23, 31, 1, '2026-04-13 05:04:24', '2026-04-13 05:04:24'),
(43, 24, 31, 1, '2026-04-17 02:52:26', '2026-04-17 02:52:26'),
(44, 25, 5, 1, '2026-04-17 04:13:56', '2026-04-17 04:13:56'),
(45, 26, 5, 1, '2026-04-17 04:18:14', '2026-04-17 04:18:14'),
(46, 27, 5, 1, '2026-04-17 04:21:28', '2026-04-17 04:21:28'),
(47, 28, 5, 1, '2026-04-17 04:27:53', '2026-04-17 04:27:53'),
(48, 29, 5, 1, '2026-04-21 09:37:27', '2026-04-21 09:37:27'),
(49, 30, 5, 1, '2026-04-21 09:40:31', '2026-04-21 09:40:31'),
(50, 31, 5, 1, '2026-04-21 09:43:39', '2026-04-21 09:43:39'),
(51, 32, 1, 1, '2026-04-21 09:50:00', '2026-04-21 09:50:00'),
(52, 33, 1, 1, '2026-04-21 09:51:51', '2026-04-21 09:51:51');

-- --------------------------------------------------------

--
-- Table structure for table `class_orders`
--

CREATE TABLE `class_orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `amount` bigint NOT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `pending_lock` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_date` date DEFAULT NULL,
  `proof_url` varchar(600) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `decided_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `class_orders`
--

INSERT INTO `class_orders` (`id`, `user_id`, `class_id`, `amount`, `status`, `pending_lock`, `transfer_date`, `proof_url`, `decided_at`, `created_at`, `updated_at`) VALUES
(1, 5, 4, 999000, 'rejected', NULL, '2026-02-04', '/storage/proofs/QpZNTURm3K7V7VsIHiSZu3Oi2iND7ljUrWhp0uEq.png', '2026-04-07 06:45:33', '2026-02-04 12:09:34', '2026-04-07 06:45:33'),
(2, 6, 4, 999000, 'rejected', NULL, '2026-02-04', '/storage/proofs/B48e0rbvj2Tvmkim9iELM7gM24bJ98iS3o2tO1nP.jpg', '2026-04-07 06:45:40', '2026-02-04 12:30:39', '2026-04-07 06:45:40'),
(3, 7, 4, 9200000, 'approved', NULL, '2026-02-09', '/storage/proofs/wjp6LGCOqElAgDq6lqaefBI0Q9RdY8OyJh965MRT.png', '2026-04-08 07:08:18', '2026-02-09 09:52:40', '2026-04-08 07:08:18'),
(5, 8, 4, 9200000, 'pending', NULL, '2026-02-13', '/storage/proofs/jjNwnILUmaoGCthUWvPFJrnqzDiwP0lsPvMF0FEb.png', '2026-04-07 06:45:49', '2026-02-13 03:34:57', '2026-04-07 06:45:49'),
(6, 7, 17, 0, 'pending', NULL, '2026-03-06', '/storage/proofs/U942gZ0Io6oVntOb9pKNUkevhltYWCguT8BRb6it.png', NULL, '2026-03-06 07:40:53', '2026-03-06 07:40:53'),
(7, 7, 20, 5000000, 'approved', NULL, '2026-03-11', '/storage/proofs/N4MBNbAa1cg6nG4LxDwV6cr2qhmxB8FcDiLs2yOk.png', '2026-03-11 06:24:29', '2026-03-11 06:23:47', '2026-03-11 06:24:29'),
(8, 10, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/mrIBI0cufWoBB4oMPnA4XPgbnAr5cKGFXk9SVtVs.png', '2026-03-30 03:16:09', '2026-03-30 03:15:00', '2026-03-30 03:16:09'),
(9, 9, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/gc6adYo1zMY5Zl5dKxvAip8eBECezOl0flIWhJpm.jpg', '2026-03-30 03:33:11', '2026-03-30 03:32:46', '2026-03-30 03:33:11'),
(10, 13, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/dSgBvmLc1eNSTUzxW6uwpGV3ETwRM7kW0HXaAONo.jpg', '2026-03-30 03:44:55', '2026-03-30 03:43:34', '2026-03-30 03:44:55'),
(11, 16, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/1nIr4naJjB866bk6cFT9NVdFLVvAP3INZxE4y2ie.jpg', '2026-03-30 05:38:43', '2026-03-30 05:14:22', '2026-03-30 05:38:43'),
(12, 17, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/qkYjNDrpgbnLutyyXRCp8aZDpDVFzbEQjvB04nmz.jpg', '2026-03-30 07:00:35', '2026-03-30 06:59:31', '2026-03-30 07:00:35'),
(13, 14, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/IB2caHvV6WdjNuCp2Q8UfPj0uwaJI2jDJyEZhGTY.png', '2026-03-30 11:04:48', '2026-03-30 11:02:44', '2026-03-30 11:04:48'),
(14, 11, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/WqrIuhgXaOBnSDbhjFhftzFSCKEGwla1Xlv9LpU1.jpg', '2026-03-30 11:19:27', '2026-03-30 11:18:50', '2026-03-30 11:19:27'),
(15, 15, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/8nXiH7FoR9XHHzNWfSTSYpPlnJ6sIbhiwfEQFBtN.jpg', '2026-03-30 11:44:33', '2026-03-30 11:43:16', '2026-03-30 11:44:33'),
(16, 12, 4, 9200000, 'approved', NULL, '2026-03-30', '/storage/proofs/ZnfUtXZ4IMu62CyQn7v9iAPaaYHMcdVA2IhhRlGs.jpg', '2026-03-30 14:32:58', '2026-03-30 14:29:06', '2026-03-30 14:32:58'),
(17, 7, 19, 4000000, 'approved', NULL, '2026-04-07', '/storage/proofs/Fn0o62wmsVAfdKJx4SSKdUg8EyoLdofIlOcIJzOk.png', '2026-04-07 08:52:12', '2026-04-07 08:49:00', '2026-04-07 08:52:12'),
(18, 10, 19, 4000000, 'approved', NULL, '2026-04-07', '/storage/proofs/slyfIrGQBx6NmNyvvfn6ewJxXUYOWNk1RFnw7GiB.png', '2026-04-07 08:52:15', '2026-04-07 08:51:23', '2026-04-07 08:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `class_order_status_logs`
--

CREATE TABLE `class_order_status_logs` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `class_order_status_logs`
--

INSERT INTO `class_order_status_logs` (`id`, `order_id`, `status`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 'pending', NULL, '2026-02-04 12:09:34', '2026-02-04 12:09:34'),
(2, 2, 'pending', NULL, '2026-02-04 12:30:39', '2026-02-04 12:30:39'),
(3, 2, 'approved', NULL, '2026-02-04 12:49:52', '2026-02-04 12:49:52'),
(4, 3, 'pending', NULL, '2026-02-09 09:52:40', '2026-02-09 09:52:40'),
(5, 3, 'approved', NULL, '2026-02-09 09:53:50', '2026-02-09 09:53:50'),
(8, 5, 'pending', NULL, '2026-02-13 03:34:57', '2026-02-13 03:34:57'),
(9, 5, 'approved', NULL, '2026-03-04 10:46:27', '2026-03-04 10:46:27'),
(10, 6, 'pending', NULL, '2026-03-06 07:40:53', '2026-03-06 07:40:53'),
(11, 7, 'pending', NULL, '2026-03-11 06:23:47', '2026-03-11 06:23:47'),
(12, 7, 'approved', NULL, '2026-03-11 06:24:29', '2026-03-11 06:24:29'),
(13, 8, 'pending', NULL, '2026-03-30 03:15:01', '2026-03-30 03:15:01'),
(14, 8, 'approved', NULL, '2026-03-30 03:16:09', '2026-03-30 03:16:09'),
(15, 9, 'pending', NULL, '2026-03-30 03:32:46', '2026-03-30 03:32:46'),
(16, 9, 'approved', NULL, '2026-03-30 03:33:11', '2026-03-30 03:33:11'),
(17, 10, 'pending', NULL, '2026-03-30 03:43:34', '2026-03-30 03:43:34'),
(18, 10, 'approved', NULL, '2026-03-30 03:44:55', '2026-03-30 03:44:55'),
(19, 11, 'pending', NULL, '2026-03-30 05:14:22', '2026-03-30 05:14:22'),
(20, 11, 'approved', NULL, '2026-03-30 05:38:43', '2026-03-30 05:38:43'),
(21, 12, 'pending', NULL, '2026-03-30 06:59:31', '2026-03-30 06:59:31'),
(22, 12, 'approved', NULL, '2026-03-30 07:00:35', '2026-03-30 07:00:35'),
(23, 13, 'pending', NULL, '2026-03-30 11:02:44', '2026-03-30 11:02:44'),
(24, 13, 'approved', NULL, '2026-03-30 11:04:48', '2026-03-30 11:04:48'),
(25, 14, 'pending', NULL, '2026-03-30 11:18:50', '2026-03-30 11:18:50'),
(26, 14, 'approved', NULL, '2026-03-30 11:19:27', '2026-03-30 11:19:27'),
(27, 15, 'pending', NULL, '2026-03-30 11:43:16', '2026-03-30 11:43:16'),
(28, 15, 'approved', NULL, '2026-03-30 11:44:33', '2026-03-30 11:44:33'),
(29, 16, 'pending', NULL, '2026-03-30 14:29:06', '2026-03-30 14:29:06'),
(30, 16, 'approved', NULL, '2026-03-30 14:32:58', '2026-03-30 14:32:58'),
(32, 2, 'pending', NULL, '2026-03-31 01:55:54', '2026-03-31 01:55:54'),
(33, 1, 'rejected', NULL, '2026-04-07 06:45:33', '2026-04-07 06:45:33'),
(34, 2, 'rejected', NULL, '2026-04-07 06:45:40', '2026-04-07 06:45:40'),
(35, 3, 'pending', NULL, '2026-04-07 06:45:44', '2026-04-07 06:45:44'),
(36, 5, 'pending', NULL, '2026-04-07 06:45:49', '2026-04-07 06:45:49'),
(37, 17, 'pending', NULL, '2026-04-07 08:49:00', '2026-04-07 08:49:00'),
(38, 18, 'pending', NULL, '2026-04-07 08:51:23', '2026-04-07 08:51:23'),
(39, 17, 'approved', NULL, '2026-04-07 08:52:12', '2026-04-07 08:52:12'),
(40, 18, 'approved', NULL, '2026-04-07 08:52:15', '2026-04-07 08:52:15'),
(41, 3, 'approved', NULL, '2026-04-08 07:08:18', '2026-04-08 07:08:18');

-- --------------------------------------------------------

--
-- Table structure for table `class_reviews`
--

CREATE TABLE `class_reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `enrollment_id` bigint UNSIGNED NOT NULL,
  `rating` int UNSIGNED NOT NULL COMMENT 'Rating 1-5',
  `comment` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `class_reviews`
--

INSERT INTO `class_reviews` (`id`, `user_id`, `class_id`, `enrollment_id`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
(1, 9, 4, 7, 5, 'E-Learning yang sangat bagus. Singkat, padat dan jelas. Mohon dipertahankan', '2026-03-31 03:33:47', '2026-03-31 03:33:47'),
(2, 16, 4, 9, 5, NULL, '2026-03-31 10:47:09', '2026-03-31 10:47:09'),
(3, 17, 4, 10, 5, 'Menarik', '2026-04-02 23:53:00', '2026-04-02 23:53:00');

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `status` enum('inactive','active','completed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `activated_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enrollments`
--

INSERT INTO `enrollments` (`id`, `user_id`, `class_id`, `status`, `activated_at`, `completed_at`, `created_at`, `updated_at`) VALUES
(5, 7, 20, 'active', '2026-03-11 06:24:29', NULL, '2026-03-11 06:24:29', '2026-03-11 06:24:29'),
(6, 10, 4, 'active', '2026-03-30 03:16:09', NULL, '2026-03-30 03:16:09', '2026-03-30 03:16:09'),
(7, 9, 4, 'active', '2026-03-30 03:33:11', NULL, '2026-03-30 03:33:11', '2026-03-30 03:33:11'),
(8, 13, 4, 'active', '2026-03-30 03:44:55', NULL, '2026-03-30 03:44:55', '2026-03-30 03:44:55'),
(9, 16, 4, 'active', '2026-03-30 05:38:43', NULL, '2026-03-30 05:38:43', '2026-03-30 05:38:43'),
(10, 17, 4, 'active', '2026-03-30 07:00:35', NULL, '2026-03-30 07:00:35', '2026-03-30 07:00:35'),
(11, 14, 4, 'active', '2026-03-30 11:04:48', NULL, '2026-03-30 11:04:48', '2026-03-30 11:04:48'),
(12, 11, 4, 'active', '2026-03-30 11:19:27', NULL, '2026-03-30 11:19:27', '2026-03-30 11:19:27'),
(13, 15, 4, 'active', '2026-03-30 11:44:33', NULL, '2026-03-30 11:44:33', '2026-03-30 11:44:33'),
(14, 12, 4, 'active', '2026-03-30 14:32:58', NULL, '2026-03-30 14:32:58', '2026-03-30 14:32:58'),
(15, 7, 19, 'active', '2026-04-07 08:52:12', NULL, '2026-04-07 08:52:12', '2026-04-07 08:52:12'),
(16, 10, 19, 'active', '2026-04-07 08:52:15', NULL, '2026-04-07 08:52:15', '2026-04-07 08:52:15'),
(17, 7, 4, 'active', '2026-04-08 07:08:18', NULL, '2026-04-08 07:08:18', '2026-04-08 07:08:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mentors`
--

CREATE TABLE `mentors` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `headline` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `avatar_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mentors`
--

INSERT INTO `mentors` (`id`, `name`, `headline`, `bio`, `avatar_url`, `created_at`, `updated_at`) VALUES
(1, 'Tri Apriansyah', 'Head of Impact and Learning Socialimpact.ID', 'Tri Apriansyah merupakan seorang profesional di bidang pengelolaan dampak sosial dan keberlanjutan yang saat ini menjabat sebagai Head of Impact and Learning di Socialimpact.ID. Ia berperan strategis dalam merancang arah pembelajaran, pengembangan kapasitas, serta penguatan sistem pengukuran dampak bagi organisasi, mitra, dan pemangku kepentingan. Dengan pendekatan berbasis data dan praktik terbaik global, Tri aktif mendorong penerapan standar keberlanjutan yang relevan dengan konteks Indonesia, khususnya dalam implementasi program CSR, ESG, dan inisiatif sosial yang berorientasi pada hasil dan keberlanjutan jangka panjang. Perannya tidak hanya terbatas pada pengelolaan internal, tetapi juga mencakup pendampingan mitra lintas sektor untuk membangun kerangka kerja dampak yang lebih terstruktur, terukur, dan akuntabel.\r\n\r\nMelalui keterlibatannya dalam berbagai program pembelajaran seperti Impact Academy, Tri berkontribusi dalam pengembangan materi dan fasilitasi pelatihan yang membahas pengukuran dampak sosial, Social Return on Investment (SROI), Theory of Change, serta perencanaan dan evaluasi program. Ia juga aktif menjadi narasumber dalam forum diskusi, pelatihan, dan kegiatan penguatan kapasitas yang menekankan pentingnya integrasi antara praktik lapangan, riset, dan inovasi pembelajaran. Dengan latar belakang pendidikan di bidang kesejahteraan sosial, Tri membawa perspektif yang komprehensif antara aspek teknis, sosial, dan strategis, sehingga mampu mendorong lahirnya program-program yang tidak hanya berdampak positif, tetapi juga berkelanjutan dan relevan dengan kebutuhan masyarakat serta dunia usaha.', '/storage/mentors/7Akd7FCl06f3UJnKwow66b0NSuCFYSl3FSDvNQyJ.jpg', '2026-02-03 09:23:25', '2026-02-04 12:06:18'),
(2, 'Fahmi Abdillah', 'Head of Surabaya Region – Socialimpact.ID', 'Fahmi merupakan bagian dari tim peneliti dengan pengalaman 5 tahun di bidang CSR. Ia telah terlibat dalam berbagai proyek CSR seperti Social Mapping, Social Return on Investment (SROI), Indeks Kepuasan Masyarakat (IKM), Social License Operating Index (SLOI), Stakeholder Engagement (SE), serta Community Involvement and Development. Bidang keunggulannya meliputi topik pendidikan, lingkungan, dan usaha kecil.\r\n\r\nFahmi juga merupakan Trainer soft competency dan learning skills yang selalu antusias untuk belajar dari berbagai sumber. Ia telah memperoleh banyak pengalaman baru dan memiliki motivasi tinggi dalam setiap pekerjaan yang dijalani. Pengalaman mengajar di sekolah membuatnya menyadari bahwa masih banyak siswa yang kebingungan dalam menentukan metode belajar yang tepat sesuai dengan potensi individu mereka. Berdasarkan pengalaman mengajar dan mengikuti berbagai pelatihan serupa, Fahmi mengembangkan modul pelatihan Learning Skills yang membantu siswa mengatasi kesulitan belajar, sehingga proses pembelajaran menjadi lebih efektif dan menyenangkan.', '/storage/mentors/3jYNhl5et2XURpSfY2Qd6YJp23TfgWWYTnFjgkI9.jpg', '2026-02-03 09:23:25', '2026-02-04 12:05:52'),
(3, 'Regina Inderadi', 'Greenhouse Gas (GHG) Emission Validator/Verifier', 'Regina adalah profesional independen di bidang keberlanjutan dan akuntansi gas rumah kaca (GRK) yang aktif sebagai pembicara, pelatih, dan moderator dalam berbagai forum regional maupun internasional. Ia bekerja secara kolaboratif dan berbasis proyek dengan perusahaan, lembaga keuangan, organisasi non-profit, serta para pemangku kepentingan dalam ekosistem keberlanjutan. Dengan sertifikasi ISO 14064 Lead Verifier & Validator dan Certified Sustainable Supply Chain Professional (CSSCP), Regina memiliki lebih dari satu dekade pengalaman dalam konsultasi strategis, manajemen karbon, serta pengembangan kapasitas di sektor pendidikan dan industri.\r\n\r\nSaat ini, fokus utamanya meliputi akuntansi dan verifikasi emisi Scope 1, 2, dan 3, pendampingan pelaporan keberlanjutan dan laporan tahunan yang selaras dengan GRI dan SDGs, serta perencanaan dekarbonisasi dan Net Zero. Ia juga mendukung kesiapan Science-Based Targets (SBTi) dengan menerjemahkan standar teknis menjadi keluaran yang aplikatif dan siap digunakan dalam pengambilan keputusan. Selain praktik independen, Regina terlibat dalam berbagai tim ahli lintas organisasi dan terbuka untuk kolaborasi strategis, peran konsultasi terstruktur, serta proyek pelaporan keberlanjutan yang menuntut kualitas data karbon, narasi ESG yang kuat, dan integritas pelaporan.', '/storage/mentors/LNYi224mAsuyZlW5hwJFWvJZk4zUJ4IHkdQVAy5W.jpg', '2026-02-03 09:23:25', '2026-02-04 12:05:59'),
(4, 'Ashari Kara', 'Head of Marketing, Business Development and Implementation', 'Ashari Kara merupakan konsultan berpengalaman di bidang CSR, ESG, dan pelaporan keberlanjutan yang telah mendampingi berbagai organisasi, mulai dari BUMN, perusahaan multinasional, hingga sektor swasta. Fokus keahliannya terletak pada perancangan dan implementasi program pengembangan masyarakat yang berorientasi pada pencegahan serta penanganan konflik sosial di wilayah operasional perusahaan. Sepanjang perjalanan profesionalnya, ia aktif terlibat dalam berbagai inisiatif di kawasan yang terdampak pembangunan infrastruktur dan industri berskala besar, dengan memfasilitasi dialog yang inklusif, melakukan pemetaan pemangku kepentingan, serta merancang intervensi berbasis kebutuhan riil masyarakat. Pendekatan ini memungkinkan terciptanya hubungan yang lebih harmonis antara perusahaan dan komunitas lokal, sekaligus memperkuat legitimasi sosial terhadap aktivitas bisnis yang dijalankan.\r\n\r\nBerlandaskan standar global seperti ISO 26000 dan Tujuan Pembangunan Berkelanjutan (SDGs), Ashari Kara memastikan setiap program yang dirancang mampu menghasilkan dampak lingkungan, sosial, dan ekonomi yang terukur serta berkelanjutan. Dengan komitmen kuat untuk menyelaraskan tujuan korporasi dengan kebutuhan masyarakat, ia membantu organisasi menerjemahkan komitmen keberlanjutan ke dalam strategi yang aplikatif dan berdampak jangka panjang. Melalui pendekatan kolaboratif dan berbasis data, Ashari Kara terus mendorong terciptanya stabilitas sosial di wilayah operasional sekaligus membangun nilai bersama yang memberikan manfaat nyata bagi perusahaan, masyarakat, dan lingkungan secara berkelanjutan.', '/storage/mentors/nrcsA0y4v8F5RmBhI8twVHtVlipalB7um5SqUgp5.jpg', '2026-02-03 09:23:25', '2026-02-04 12:05:46'),
(5, 'Rio Zakarias Widyandaru', 'Founder & Director Socialimpact.ID', 'Berbekal lebih dari 10 tahun pengalaman di bidang keberlanjutan bisnis, Corporate Social Responsibility (CSR), dan pengukuran dampak sosial, Rio Zakarias Widyandaru saat ini menjabat sebagai Direktur sekaligus Pendiri Socialimpact.ID. Dalam perannya, ia aktif membantu berbagai organisasi merancang dan menyelaraskan strategi bisnis agar sejalan dengan prinsip Environmental, Social, and Governance (ESG) serta praktik terbaik keberlanjutan. Ia juga merupakan profesional manajemen risiko bersertifikat dan analis keberlanjutan, dengan latar belakang pendidikan magister di bidang sustainability.\r\n\r\nDedikasinya berfokus pada upaya menciptakan perubahan sosial yang berdampak nyata melalui penguatan kolaborasi lintas sektor. Sepanjang kariernya, ia telah membangun kemitraan strategis dengan berbagai pemangku kepentingan, mulai dari institusi pendidikan seperti CECT Trisakti University, jejaring profesional seperti Forum CSR Indonesia, hingga perusahaan, organisasi non-pemerintah, komunitas, dan pemerintah. Ia turut memimpin serta terlibat dalam beragam proyek dan program yang menitikberatkan pada penyelesaian isu sosial dan lingkungan, termasuk pengentasan kemiskinan, peningkatan akses pendidikan, penguatan sektor kesehatan, serta pengelolaan keberlanjutan yang berorientasi pada dampak jangka panjang.', '/storage/mentors/Msyhvm4FYcICPL82bxzhdUoBuJ9COXk9VORucGzu.jpg', '2026-02-03 09:23:25', '2026-02-04 12:06:09'),
(6, 'Intan Nugrahaini Putri', 'Manager Komunikasi dan TJSL PT PLN (Persero)  UID Jakarta Raya', NULL, '/storage/mentors/pbOAmgQDrOP4vMFgE4iTo8tRldJwxUPUmzK5lgiw.jpg', '2026-03-03 09:39:42', '2026-03-06 04:49:31'),
(7, 'Andromedo Cahyo Purnomo', 'Officer CSR & SMEPP PT Kilang Pertamina Internasional RU VI Balongan', NULL, '/storage/mentors/517qrJwnlE7dxxqwdsND94zfDdFpLtpjeqoLIfhT.jpg', '2026-03-03 09:40:28', '2026-03-06 04:50:09'),
(8, 'Lucia Karina', 'VP Public Affairs, Communications and Sustainability Coca-Cola Europacific Partners', NULL, '/storage/mentors/xfNScGN3RahrgDDzxpFfSgnEVRw5dtRztxgixSpN.jpg', '2026-03-04 06:26:04', '2026-03-06 03:15:22'),
(9, 'Nurafifah', 'AVP Implementation and Development ESG Division PT Pegadaian', NULL, '/storage/mentors/Q4u5T5n3UnwtLxMsN4kS56FFPz2MZVlC4SHr4ZGn.jpg', '2026-03-04 06:26:37', '2026-03-06 03:15:42'),
(10, 'Amalia Yunita', 'CEO Arus Liar and Bravo Glamping', NULL, '/storage/mentors/wyFs2XZZHUrLTabugM29ieK0RtVM2HPDlvnHH71i.jpg', '2026-03-04 06:27:10', '2026-03-06 03:13:24'),
(11, 'Abi Nisaka', 'Head of Corporate Sustainability, PT Kalbe Farma Tbk', NULL, '/storage/mentors/2rdLtF2I67oHMcPR3X78tNBnU7hGXssm7pGLmQJN.jpg', '2026-03-04 09:33:30', '2026-03-06 03:13:14'),
(12, 'Imad Zaky Mubarak', 'ESG Advisor, PT Jasa Marga (Persero) Tbk', NULL, '/storage/mentors/ko1V0rYH9ocr05iZlzgqE5n6qw7otFA4X8UdXOcb.jpg', '2026-03-04 09:33:55', '2026-03-06 03:15:10'),
(13, 'Roy Widiartha', 'Kepala Kelompok Kerja Pengembangan Masyarakat SKK Migas', NULL, '/storage/mentors/23vg9NXQFIToo6sSXbtK3G3zZqPLxSH2l8fNFVYK.jpg', '2026-03-06 02:14:00', '2026-03-06 03:15:30'),
(14, 'Andri Kristianto', 'Community Investment Manager Harbour Energy', NULL, '/storage/mentors/YYpWwdWHAZZwGiJurhqHp7XFdpsd41yU2LkdZwJo.jpg', '2026-03-06 02:15:15', '2026-03-06 03:13:39'),
(15, 'Bhakti Yudhantara', 'Social and Environmental Compliance Manager BP Indonesia', NULL, '/storage/mentors/OqSajET6ctphjymHRyal0VmwwaItWoJM1F0tlp11.jpg', '2026-03-06 02:16:15', '2026-03-06 03:14:06'),
(16, 'Ibrahim Arsyad', 'Senior Manager Sustainability & Performance Excellence Medco E&P Indonesia', NULL, '/storage/mentors/xBFvWYOZmTB8RFmXj83o5SfQ3Z52URvUESjStcWx.jpg', '2026-03-06 03:43:20', '2026-03-06 03:44:25'),
(17, 'Prima Retno Ardhanie', 'Vice President TJSL PT PLN (Persero)', NULL, '/storage/mentors/4daY2Tx59YLolIBfiKwYjURdSTRAXO9bNUiFHLUD.jpg', '2026-03-06 03:45:08', '2026-03-06 03:45:08'),
(18, 'Agusman Muhammad Latif', 'Senior Manager Corporate Secretary Division PT Bank Rakyat Indonesia (Persero) Tbk', NULL, '/storage/mentors/v37D0VaOdXTeSxJlF59I75q7NStXXZlTfyIYJzQv.jpg', '2026-03-06 03:46:15', '2026-03-06 03:46:15'),
(19, 'Adrian Wishnu Paranngi', 'Kepala Departemen TJSL IFG', NULL, '/storage/mentors/DGo3hczenCuNEdppJ2hZpv5Pol6itpLOIbaExyLs.jpg', '2026-03-06 03:47:05', '2026-03-06 03:47:05'),
(20, 'Rudi Ariffianto', 'Vice President CSR & SMEPP Management PT Pertamina (Persero)', NULL, '/storage/mentors/Pg8x6R9I189j2q8vw8dsW9JoCsZLzdyhR0YLXqCr.jpg', '2026-03-06 03:58:17', '2026-03-06 03:58:17'),
(21, 'Lisye Octaviana', 'Corporate Communication & Community Development Group Head PT Jasa Marga (Persero) Tbk', NULL, '/storage/mentors/wL5h2xrb7qsSslopRf2QsCW1mGin5lgC1cbuBonr.jpg', '2026-03-06 03:59:08', '2026-03-06 03:59:08'),
(22, 'Ali Hasian Harahap', 'Vice President CSR PT Indonesia Asahan Aluminium (INALUM)', NULL, '/storage/mentors/NH3bHjcARi9yL9z9iiiaSAreVwf2HC8x6SJvtFP7.jpg', '2026-03-06 03:59:46', '2026-03-06 03:59:46'),
(23, 'Siti Chotijah', 'Ketua Umum Generasi Pesona Indonesia', NULL, '/storage/mentors/eY3RmvIiXiFAtkZzCR5O6Zzjti201zncgRYPvvNv.jpg', '2026-03-06 04:02:02', '2026-03-06 04:02:02'),
(24, 'Ismiyati', 'Sustainability Division Head InJourney Destination Management', NULL, '/storage/mentors/sLe0BTq3cXYgV9IvVsuIOTKuUBMWwXYpa5Pk92nq.jpg', '2026-03-06 04:02:45', '2026-03-06 04:02:45'),
(25, 'Retno Satiti', 'Vice President Komunikasi, Korporasi, Protokoler, dan TJSL PT Pelindo Sinergi Lokaseva', NULL, '/storage/mentors/77lIMa0f0aXThbuKaimY85iFvBozgu4aNMGbQqCL.jpg', '2026-03-06 04:11:09', '2026-03-06 04:47:42'),
(26, 'Yulia Takuma Dewi', 'Corporate Secretary PLN Icon Plus', NULL, '/storage/mentors/5equysrbH7PpfGcgj68AnBE8Ma6zeZG7MUx0bFH7.jpg', '2026-03-06 04:11:32', '2026-03-06 04:47:57'),
(27, 'Intan Nugrahaini Putri', 'Manager Komunikasi dan TJSL PT PLN (Persero) UID Jakarta Raya', NULL, '/storage/mentors/kkVFOgFMtJbv6CvDls5DYcNvMj3bGwYbOb6aTKEV.jpg', '2026-03-06 04:44:49', '2026-03-06 04:45:22'),
(28, 'Andromedo Cahyo Purnomo', 'Officer CSR & SMEPP PT Kilang Pertamina International RU VI Balongan', NULL, '/storage/mentors/Y2Qxsebg0FDcMioxE9X8yvQ6UtpbVySJPpKHXG1L.jpg', '2026-03-06 04:47:11', '2026-03-06 04:47:11'),
(29, 'Febrianto Zenny', 'PT Pelabuhan Indonesia (Persero)', NULL, '/storage/mentors/hq6ILLC84mTvXvNi6wB6RuksHwfJoVHo3qmPpAEB.jpg', '2026-03-09 04:47:21', '2026-03-09 04:47:21'),
(30, 'Indar Wijaya', 'Wakil Sekretaris Jendral Himpunan Nelayan Seluruh Indonesia', NULL, '/storage/mentors/EFevUnor3Lq8JgD7rrKpnFwan9GRLPx8nntqeotf.jpg', '2026-03-09 04:48:12', '2026-03-09 04:48:12'),
(31, 'Fernando Galang Rahmadana', 'Head of Communication and Partnership Socialimpact.ID', NULL, '/storage/mentors/6TAnThA2zuRamOYL7foSLRzQdHXmlXrh16UeUVel.jpg', '2026-04-13 04:50:03', '2026-04-13 04:50:03');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_21_000001_create_categories_table', 1),
(5, '2026_01_21_000002_create_mentors_table', 1),
(6, '2026_01_21_000003_create_classes_table', 1),
(7, '2026_01_21_000004_create_class_mentors_table', 1),
(8, '2026_01_21_000005_create_modules_table', 1),
(9, '2026_01_21_000006_create_videos_table', 1),
(10, '2026_01_21_000007_create_video_resources_table', 1),
(11, '2026_01_21_000008_create_video_notes_table', 1),
(12, '2026_01_21_000009_create_quizzes_table', 1),
(13, '2026_01_21_000010_create_quiz_questions_table', 1),
(14, '2026_01_21_000011_create_quiz_options_table', 1),
(15, '2026_01_21_000012_create_quiz_attempts_table', 1),
(16, '2026_01_21_000013_create_quiz_answers_table', 1),
(17, '2026_01_21_000014_create_enrollments_table', 1),
(18, '2026_01_21_000015_create_class_orders_table', 1),
(19, '2026_01_21_000016_create_class_order_status_logs_table', 1),
(20, '2026_01_21_000017_create_module_progress_table', 1),
(21, '2026_01_21_000018_create_video_progress_table', 1),
(22, '2026_01_21_000019_create_certificate_settings_table', 1),
(23, '2026_01_21_000020_create_certificate_issuances_table', 1),
(24, '2026_01_31_151848_create_class_reviews_table', 1),
(25, '2026_02_10_000001_create_admin_otps_table', 2),
(26, '2026_02_26_162512_create_testimonies_table', 3),
(27, '2026_03_05_161800_add_type_to_classes_table', 4),
(28, '2026_03_09_172211_add_location_is_priority_url_link_to_classes_table', 5),
(29, '2026_03_26_140009_create_page_settings_table', 6),
(30, '2026_03_31_110526_add_url_link_to_modules_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint UNSIGNED NOT NULL,
  `class_id` bigint UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int NOT NULL DEFAULT '1',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `url_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `class_id`, `title`, `description`, `sort_order`, `is_active`, `created_at`, `updated_at`, `url_link`) VALUES
(10, 4, 'Menyambut Perjalanan Pembelajaran', 'Selamat datang di Impact Academy video e-learning untuk program Sertifikasi BNSP Skema Pelaksana Program Pemberdayaan Masyarakat.\r\n\r\nDi rangkaian video ini, Kami akan memberikan materi untuk memberikan pemahaman menyeluruh tentang pemberdayaan masyarakat, mulai dari konsep dasar, strategi, hingga implementasi praktis. Kemudian kami akan memandu langkah demi langkah bagaimana menyiapkan bukti tugas untuk memenuhi persyaratan.', 2, 1, '2026-02-04 08:53:01', '2026-02-10 08:53:26', NULL),
(11, 4, 'Pengenalan Unit Kompetensi Sertifikasi', 'Pada sesi ini, Anda akan mempelajari unit kompetensi utama beserta bukti tugas yang perlu dipersiapkan dalam proses sertifikasi. Materi dirancang untuk membekali Anda sebagai Pelaksana Program Pemberdayaan Masyarakat agar mampu merencanakan, menyiapkan, dan melaksanakan program secara efektif. Tiga kompetensi inti yang akan dibahas meliputi perencanaan program, prakondisi kegiatan pemberdayaan, serta pelaksanaan kelola sosial secara terstruktur dan berdampak.', 3, 1, '2026-02-04 09:14:35', '2026-02-10 08:53:26', NULL),
(12, 4, 'Introduction: Pentingnya Pemberdayaan Masyarakat', 'Pada sesi ini, Anda akan memahami dasar pemberdayaan masyarakat dan alasan pentingnya bagi keberlanjutan lingkungan, sosial, dan ekonomi. Materi ini membahas definisi serta prinsip utama pemberdayaan sebagai bekal sebelum masuk ke tahap perencanaan, prakondisi, dan pelaksanaan program. Sesi ini dirancang agar Anda memiliki pola pikir yang terstruktur, praktis, dan berorientasi dampak dalam menjalankan program pemberdayaan.', 4, 1, '2026-02-04 11:49:47', '2026-02-10 08:53:26', NULL),
(13, 4, 'Unit Kompetensi Satu: Merencanakan Program Pemberdayaan Masyarakat', 'Dalam unit kompetensi ini, Anda akan dibekali kemampuan untuk mempersiapkan pekerjaan, menentukan teknik dan strategi pemberdayaan, merancang program pemberdayaan masyarakat, hingga mendokumentasikan seluruh proses perencanaan secara sistematis.', 5, 1, '2026-02-04 14:34:41', '2026-02-10 08:53:26', NULL),
(14, 4, 'Unit Kompetensi Dua: Melakukan Prakondisi Kegiatan Pemberdayaan Masyarakat', 'Dalam unit kompetensi ini, Anda akan mempelajari langkah strategis untuk memulai program pemberdayaan secara efektif, mulai dari asesmen potensi masyarakat, sosialisasi kepada penerima manfaat, teknik negosiasi yang konstruktif, hingga cara mendokumentasikan proses kerja secara sistematis.', 6, 1, '2026-02-04 14:44:27', '2026-02-10 08:53:26', NULL),
(15, 4, 'Unit Kompetensi Tiga: Melaksanakan Kegiatan Kelola Sosial', 'Dalam unit kompetensi ini, Anda akan mempelajari Unit Kompetensi ketiga: Melaksanakan Kegiatan Kelola Sosial. Materi dirancang untuk membantu Anda memahami cara menyusun rencana kegiatan kelola sosial secara sistematis, menjalankan program di lapangan dengan tepat, serta mendokumentasikan setiap proses dan hasil kerja. Ikuti sesi ini hingga tuntas agar setiap langkah implementasi dapat dilakukan lebih terarah dan terukur.', 7, 1, '2026-02-04 15:08:00', '2026-02-13 08:36:37', NULL),
(16, 4, 'Teaser - Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 'Pemberdayaan masyarakat membutuhkan pelaksana yang kompeten dan terstandar agar program benar-benar berdampak. Impact Academy menghadirkan E-Learning Sertifikasi Pelaksana Program Pemberdayaan Masyarakat bersama LSP dan BNSP. Dirancang aplikatif dan berbasis praktik, program ini membekali peserta dengan keterampilan teknis, perencanaan, dan pemahaman lapangan untuk menjalankan inisiatif sosial secara efektif, terukur, dan berkelanjutan.', 1, 1, '2026-02-10 06:53:20', '2026-02-10 08:53:26', NULL),
(19, 5, 'From Impact to Recognition', 'CSR kini tidak lagi sekadar kewajiban perusahaan, melainkan strategi penting untuk memperkuat keberlanjutan bisnis dan menciptakan nilai bersama. Program CSR dituntut menghasilkan dampak terukur, relevan dengan kebutuhan masyarakat, serta selaras dengan visi perusahaan. Di tengah meningkatnya perhatian pada ESG, CSR berperan krusial sebagai penggerak pilar sosial dan tata kelola. Integrasi CSR dalam kebijakan dan perencanaan menjadi kunci konsistensi, kepatuhan, dan keberlanjutan dampak.', 1, 1, '2026-02-18 02:36:27', '2026-02-18 02:36:27', NULL),
(20, 6, 'Beyond Programs, Creating Impact', 'Pemenuhan gizi merupakan fondasi penting dalam pembangunan manusia berkelanjutan dan pencegahan stunting sejak awal kehidupan. Tantangan ini menuntut kolaborasi multipihak melalui program sosial yang dirancang strategis, berbasis data dan komunitas, serta terintegrasi dengan TJSL dan agenda keberlanjutan perusahaan. Pendekatan komprehensif ini memastikan intervensi tepat sasaran, berdampak terukur, dan berkontribusi jangka panjang terhadap kualitas SDM masa depan.', 1, 1, '2026-02-23 07:27:49', '2026-02-23 07:34:57', NULL),
(21, 8, 'Dana, Dampak, dan Tanggung Jawab: The Impact of the Financial Sector in the National TJSL Ecosystem', 'Sektor keuangan berperan strategis membangun ekonomi inklusif dan berkelanjutan. Lewat TJSL, institusi finansial mampu menyalurkan dana yang menghasilkan nilai bisnis sekaligus dampak sosial nyata. Di Impact Talks #8 bertajuk “Dana, Dampak, dan Tanggung Jawab”, pelajari praktik integrasi keuangan bertanggung jawab langsung dari Adrian Wishnu Paranngi (Indonesia Financial Group) dan Agusman Muhammad Latif dari PT Bank Rakyat Indonesia (Persero) Tbk.', 1, 1, '2026-03-02 06:51:52', '2026-03-02 06:51:52', NULL),
(22, 9, 'Ruang Budaya, Ruang Bersama', 'Budaya adalah jembatan yang menyatukan makna, identitas, dan keberlanjutan. Agar tetap hidup dan berdampak, pelestarian budaya memerlukan sinergi lintas sektor. Dalam Impact Talks #10, kita mengulas bagaimana Tanggung Jawab Sosial dan Lingkungan mendorong cultural impact—memperkuat jati diri lokal, menjaga warisan tradisi, serta memberdayakan komunitas dan ekosistemnya—bersama Ismiyati dan Siti Chotijah. Temukan perspektif, strategi, dan inspirasi praktik nyata yang bisa direplikasi.', 1, 1, '2026-03-02 07:36:12', '2026-03-02 07:36:12', NULL),
(23, 11, 'From Commitment to Impact', 'Bagaimana sustainability dijalankan nyata di sektor energi? Melalui Impact Talks #13, Anda akan memperoleh insight tentang strategi keberlanjutan dan community involvement & development dari tahap perencanaan hingga dampak terukur bagi masyarakat dan bisnis. Peserta juga diajak menelaah studi kasus implementatif lintas industri. Simak penjelasan selengkapnya bersama praktisi berpengalaman: Prima Retno Ardhanie — Vice President TJSL PT PLN (Persero); dan Ibrahim Arsyad — Senior Manager Sustainabi', 1, 1, '2026-03-02 08:00:43', '2026-03-02 08:00:43', NULL),
(26, 13, 'Driving the Impact of Sustainability', 'Bagaimana kolaborasi lintas sektor mampu mempercepat penurunan emisi karbon? Perubahan iklim menuntut strategi bersama dan aksi kolektif yang terarah. Dalam sesi ini, Anda akan mendalami langkah konkret dekarbonisasi dari sisi riset, kebijakan, hingga implementasi teknis di lapangan. Impact Talks #9 “Driving the Impact of Sustainability” menghadirkan diskusi inspiratif bersama narasumber berpengalaman untuk mendorong dampak keberlanjutan yang nyata dan terukur.', 1, 1, '2026-03-03 08:44:06', '2026-03-03 08:44:06', NULL),
(27, 14, 'No One Left Behind', 'Webinar No One Left Behind mengajak Anda memperkuat inklusivitas melalui strategi TJSL dan kolaborasi sosial yang berdampak. Keberlanjutan berarti memastikan setiap kelompok terlibat dan merasakan manfaatnya. Ikuti pembelajaran interaktif bersama Andromedo Cahyo Purnomo (Officer I CSR & SMEPP PT Kilang Pertamina Internasional RU VI Balongan) dan Intan Nugrahaini Putri (Manager Komunikasi dan TJSL PT PLN Persero UID Jakarta Raya) untuk memperluas perspektif dan praktik nyata.', 1, 1, '2026-03-03 09:34:46', '2026-03-03 09:34:46', NULL),
(28, 15, 'Woman in Sustainability', 'Woman in Sustainability menghadirkan perspektif segar tentang kepemimpinan perempuan dalam mendorong praktik keberlanjutan dan implementasi ESG. Bagaimana perubahan terjadi saat lebih banyak perempuan terlibat dalam pengambilan keputusan strategis? Dalam sesi ini, Lucia Karina (Coca-Cola Europacific Partners), Nurafifah (PT Pegadaian), dan Dr. Ir. Amalia Yunita (Arus Liar & Bravo Glamping) berbagi pengalaman, tantangan, serta strategi membangun masa depan yang inklusif dan berkelanjutan.', 1, 1, '2026-03-04 08:39:01', '2026-03-04 08:39:01', NULL),
(29, 16, 'ESG: Challenge and Impact', 'Dunia bisnis bergerak cepat menuju standar baru: ESG (Environmental, Social, and Governance). Isu keberlanjutan kini menjadi tolok ukur reputasi, daya saing, dan kepercayaan publik. Regulasi makin ketat, ekspektasi konsumen meningkat, dan perusahaan dituntut membuktikan dampak nyata. Lewat Impact Talks, pelajari tantangan dan strategi implementasi ESG bersama Abi Nisaka dari PT Kalbe Farma Tbk dan Imad Zaky Mubarak dari PT Jasa Marga (Persero) Tbk.', 1, 1, '2026-03-04 09:35:24', '2026-03-04 09:35:24', NULL),
(30, 17, 'Peran PPM di Industri Hulu Migas', 'Program Pengembangan Masyarakat (PPM) di industri hulu migas telah menjadi bagian penting dari komitmen perusahaan Kontraktor Kontrak Kerja Sama (KKKS) dalam membangun hubungan yang harmonis dengan masyarakat dan pemangku kepentingan. Namun dalam praktiknya, berbagai tantangan sering muncul, mulai dari pengelolaan ekspektasi masyarakat hingga memastikan program benar-benar memberi dampak nyata.', 1, 1, '2026-03-06 02:19:14', '2026-03-06 02:19:14', NULL),
(32, 18, 'Blue Economy', 'Indonesia memiliki kekayaan laut dan pesisir yang luar biasa besar. Namun, bagaimana cara memanfaatkannya tanpa merusak keberlanjutan alam? Konsep blue economy hadir sebagai pendekatan yang menyeimbangkan pertumbuhan ekonomi maritim dengan tanggung jawab menjaga ekosistem serta meningkatkan kesejahteraan masyarakat pesisir.', 1, 1, '2026-03-09 04:50:22', '2026-03-09 04:50:22', NULL),
(33, 19, 'Introduction: Peran Bisnis dalam Masyarakat', '<p>Bisnis memiliki peran besar dalam menciptakan kemakmuran ekonomi dengan memenuhi kebutuhan masyarakat dan meraih keuntungan. Saat ini, dunia kini menghadapi tantangan sosial, lingkungan, dan ekonomi yang semakin kompleks, yang memerlukan solusi bersama. Kolaborasi antara pemerintah, LSM, dan bisnis sangat penting untuk mengatasi masalah ini.</p>', 3, 1, '2026-03-09 13:47:49', '2026-04-07 03:04:26', NULL),
(34, 19, 'Definisi dan Konsep Dasar CSV', '<p>Di dalam konsep CSV, perusahaan memiliki peran penting dalam memutuskan dan mengelola tantangan, risiko, serta peluang yang ada. Dengan pendekatan ini, perusahaan bisa menciptakan inovasi, pertumbuhan, dan manfaat yang lebih besar bagi masyarakat.</p>', 4, 1, '2026-03-09 13:48:23', '2026-04-07 03:04:26', NULL),
(35, 19, 'Tiga Tipe CSV', '<p>Pada video kali ini, kita akan mulai membahas 3 tipe Creating Shared Value (CSV) dan bagaimana masing-masing tipe ini bisa diterapkan untuk menciptakan hubungan yang saling menguntungkan antara perusahaan dan masyarakat.</p>', 5, 1, '2026-03-10 04:02:24', '2026-04-07 03:06:21', NULL),
(36, 19, 'Proses Implementasi CSV', '<p>Pada sesi ini, kita akan membahas peluang Creating Shared Value (CSV) di tiap tipe dan bagaimana proses mengimplementasikan CSV dalam sebuah bisnis.</p>', 6, 1, '2026-03-10 04:04:46', '2026-04-07 03:04:26', NULL),
(37, 21, 'Pengantar Pembelajaran', '<p>Selamat datang di Impact Academy. Pada sesi e-learning ini kita akan mempelajari <strong>Logical Framework Approach (LFA)</strong>, sebuah pendekatan penting dalam merancang program yang terstruktur dan berdampak. Bersama <strong>Rio Zakarias Widyandaru</strong>, Anda akan memahami konsep dasar LFA, tahapan penyusunannya, serta bagaimana merencanakan implementasi, kebutuhan biaya, dan sumber daya secara sistematis. Sebelum memulai materi, silakan kerjakan pretest untuk mengetahui sejauh mana pemahaman awal Anda tentang LFA.</p>', 2, 1, '2026-03-11 01:23:07', '2026-04-20 06:44:00', NULL),
(38, 21, 'Introducing Logical Framework Approach (LFA)', '<p>Pada sesi ini, kami mengajak Anda memahami komponen utama dalam <strong>Logical Framework Approach (LFA)</strong>, sebuah kerangka kerja yang membantu proyek dirancang secara lebih sistematis dan terarah. Kita akan membahas apa itu LFA, kapan metode ini digunakan, serta siapa saja yang perlu terlibat dalam penyusunannya. Banyak proyek menghadapi kendala mulai dari tujuan yang tidak jelas, pengelolaan sumber daya yang lemah, hingga indikator keberhasilan yang tidak terukur. Melalui LFA, proyek dapat direncanakan lebih matang, dijalankan secara efisien, serta menghasilkan dampak yang nyata dan terukur. Sebelum masuk ke tahap teknis, mari pahami terlebih dahulu konsep dasar LFA.</p>', 3, 1, '2026-03-11 01:30:38', '2026-04-07 07:39:30', NULL),
(39, 21, 'Tahapan Analisis', '<p>Pada sesi ini, Anda akan mempelajari tahapan penting dalam <strong>Logical Framework Approach (LFA)</strong>. Proses ini terdiri dari dua fase utama: tahap analisis dan tahap perencanaan. Tahap analisis mencakup identifikasi stakeholder, pemetaan masalah, perumusan tujuan, hingga penentuan strategi yang tepat. Sementara itu, tahap perencanaan berfokus pada penyusunan kerangka LFA, penjadwalan kegiatan, serta pengelolaan sumber daya. Video ini mengulas secara khusus tahapan analisis sebagai fondasi merancang proyek yang sistematis, efektif, dan berdampak.</p>', 4, 1, '2026-03-11 01:39:45', '2026-04-07 07:39:30', NULL),
(40, 21, 'Tahapan Perencanaan', '<p>Pada sesi ini kita melanjutkan pembahasan tentang <strong>Logical Framework Approach (LFA)</strong> dengan fokus pada tahapan perencanaan. Setelah sebelumnya memahami tahap analisis, sekarang kita akan melihat bagaimana <strong>pohon tujuan</strong> menjadi fondasi penting dalam merancang LFA. Melalui pohon tujuan, kita dapat memetakan hubungan sebab-akibat antara masalah utama, akar penyebab, hingga dampak yang muncul, sehingga perencanaan program menjadi lebih terarah dan solutif.</p>', 5, 1, '2026-03-11 02:09:10', '2026-04-07 07:39:30', NULL),
(41, 21, 'Implementasi, Biaya, dan Sumber Daya', '<p>Pada sesi ini mengulas langkah penting setelah penyusunan <strong>Logical Framework Approach (LFA)</strong>, yaitu bagaimana menerjemahkan Tabel Kerangka Logis menjadi rencana implementasi yang nyata. Pembahasan mencakup penyusunan jadwal kegiatan, penentuan kebutuhan sumber daya, serta perhitungan estimasi biaya program. Tabel ini berfungsi sebagai panduan utama agar waktu, sumber daya, dan anggaran dapat dikelola secara terarah, efektif, dan efisien sehingga pelaksanaan program berjalan sesuai rencana.</p>', 6, 1, '2026-03-11 02:12:48', '2026-04-07 07:39:30', NULL),
(42, 20, 'Pengantar Theory of Change', '<p>Selamat datang di Impact Academy. Pada sesi e-learning kali ini, kita akan mempelajari <strong>Theory of Change (TOC)</strong> bersama Tri Apriansyah. Materi ini membantu Anda memahami cara merancang perubahan yang terarah dan berdampak melalui pendekatan yang sistematis. Dalam pembelajaran ini, kita akan membahas definisi dan konsep dasar TOC, komponen utamanya, serta tahapan penyusunannya. Sebelum memulai materi, silakan kerjakan pretest terlebih dahulu untuk mengetahui sejauh mana pemahaman awal Anda tentang Theory of Change.</p>', 1, 1, '2026-03-11 02:28:58', '2026-03-11 02:28:58', NULL),
(43, 20, 'Definisi dan Konsep Dasar Theory of Change', '<p>Pada sesi ini, kita akan mengenal <strong>Theory of Change (TOC)</strong>, sebuah kerangka berpikir yang membantu merancang program pemberdayaan agar lebih terarah, terukur, dan menghasilkan dampak nyata. Melalui materi ini, Anda akan mempelajari langkah awal menyusun perencanaan program secara sistematis, mulai dari rencana kerja, kebutuhan bahan dan peralatan, perencanaan sumber daya manusia, hingga penyusunan rencana anggaran biaya. Mari kita pelajari setiap komponennya secara bertahap.</p>', 2, 1, '2026-03-11 02:31:44', '2026-03-11 02:31:44', NULL),
(44, 20, 'Komponen Utama Theory of Change', '<p>Pada sesi ini, kita akan mengulas komponen utama dalam <strong>Theory of Change (ToC)</strong>. Konsep ini membantu kita memahami bagaimana sebuah program dirancang secara sistematis hingga menghasilkan dampak. Prosesnya dimulai dari penyediaan <strong>input</strong>, dilanjutkan dengan berbagai <strong>aktivitas</strong> yang direncanakan. Aktivitas tersebut menghasilkan <strong>output</strong>, yang kemudian mendorong tercapainya <strong>outcome</strong>. Dari rangkaian inilah sebuah program dapat menciptakan <strong>dampak nyata</strong> yang diharapkan bagi masyarakat.</p>', 3, 1, '2026-03-11 02:34:19', '2026-03-11 02:36:32', NULL),
(45, 20, 'Langkah Menyusun Theory of Change', '<p>Pada sesi ini, kita akan mengulas cara menyusun <strong>Theory of Change (ToC)</strong> sebagai fondasi penting dalam merancang program yang berdampak. Penyusunan ToC dilakukan melalui proses yang terstruktur dan melibatkan berbagai pihak agar tercipta kesepahaman mengenai tujuan perubahan yang ingin diwujudkan. Melalui pendekatan yang sistematis dan partisipatif, ToC membantu memetakan hubungan antara kegiatan, hasil, hingga dampak jangka panjang. Dalam pembahasan kali ini, kita akan mengenal dua metode utama dalam menyusun Theory of Change. Mari kita pelajari bersama langkah-langkahnya!</p>', 4, 1, '2026-03-11 02:35:43', '2026-03-11 02:35:43', NULL),
(46, 4, 'Pengumpulan Tugas Kerja', '<p>Modul ini merupakan ruang pengumpulan tugas bagi peserta sebagai bagian dari proses pembelajaran dan implementasi materi yang telah dipelajari. Setiap tugas dirancang untuk mengasah kemampuan analisis, perencanaan, serta evaluasi program berbasis pemberdayaan masyarakat secara komprehensif.<br><br>Seluruh tugas diharapkan disusun secara sistematis, jelas, dan berbasis data yang valid. Modul ini menjadi bagian penting dalam mengukur pemahaman peserta serta kesiapan dalam mengimplementasikan program pemberdayaan masyarakat secara nyata.</p>', 8, 1, '2026-03-30 09:41:21', '2026-03-31 09:01:52', 'https://bit.ly/TugasKerja_SertifikasiPPPM'),
(47, 19, 'Pengantar Pembelajaran', '<p>Halo Sobat Impact! Selamat datang di Impact Academy. Pada sesi e-learning ini, kita akan mengupas konsep Creating Shared Value (CSV) bersama Rio Zakarias Widyandaru. Materi mencakup peran bisnis dalam masyarakat, konsep dasar CSV, tiga tipe CSV, hingga siklus implementasinya. Sebelum memulai pembahasan, Anda dapat mengerjakan pretest untuk mengukur pemahaman awal dan memaksimalkan proses belajar.</p>', 2, 1, '2026-04-06 08:07:31', '2026-04-07 03:04:26', NULL),
(48, 19, 'Teaser - Designing CSR Programs that Creating Shared Value', '<p>Dunia bisnis kini bergerak dalam tekanan tinggi, regulasi makin ketat dan ekspektasi pemangku kepentingan terus meningkat. Perusahaan tak lagi cukup mengejar profit, tetapi harus membuktikan dampak nyata bagi masyarakat dan lingkungan. Sayangnya, banyak masih terjebak pada strategi lama dan CSR seremonial. Creating Shared Value (CSV) hadir sebagai solusi: strategi bisnis yang mengintegrasikan nilai ekonomi dan sosial. Melalui Impact Academy, pelajari CSV secara komprehensif, aplikatif, dan siap diterapkan.</p>', 1, 1, '2026-04-07 03:04:00', '2026-04-07 03:04:26', NULL),
(49, 21, 'Teaser - Designing Impactful CID Programs using Logical Framework Approach (LFA)', '<p>Banyak program CSR/TJSL tampak sukses di atas kertas—anggaran terserap, kegiatan berjalan, laporan rapi. Namun saat evaluasi, dampaknya sering tak terukur dan tak menjawab akar masalah. Ini terjadi karena perencanaan kurang strategis dan implementasi tak sistematis. Melalui Logical Framework Approach (LFA), program dirancang lebih logis, terukur, dan berbasis data. Impact Academy menghadirkan pembelajaran LFA agar setiap inisiatif benar-benar berdampak nyata, bukan sekadar asumsi.</p>', 1, 1, '2026-04-07 07:37:44', '2026-04-07 07:39:30', NULL),
(50, 22, 'Pengantar Indeks Kepuasan Masyarakat', '<p>Selamat datang di Impact Academy. Pada sesi e-learning ini, kita akan mengupas Indeks Kepuasan Masyarakat (IKM) sebagai alat penting untuk memahami kualitas layanan dan persepsi publik. Bersama Fahmi Abdillah, Anda akan dipandu mempelajari konsep dasar, metode pengukuran, analisis data, hingga penyusunan laporan IKM. Sebelum mulai, silakan kerjakan pretest untuk mengetahui sejauh mana pemahaman awal Anda terhadap materi ini.</p>', 2, 1, '2026-04-13 03:54:51', '2026-04-13 04:04:30', NULL),
(51, 22, 'Definisi dan Konsep Dasar Indeks Kepuasan Masyarakat', '<p>Pada sesi pembuka ini, kita akan mengupas Indeks Kepuasan Masyarakat (IKM) sebagai instrumen strategis untuk menilai kualitas layanan dari instansi pemerintah, perusahaan, hingga organisasi. Melalui video ini, Anda akan memahami definisi IKM, regulasi serta prinsip yang mendasarinya, hingga tujuan dan ruang lingkup pengukurannya secara komprehensif dan aplikatif dalam konteks pelayanan publik.</p>', 3, 1, '2026-04-13 03:56:44', '2026-04-13 04:04:03', NULL),
(52, 22, 'Metodologi Pengukuran Indeks Kepuasan Masyarakat', '<p>Pada sesi ini, Anda akan mempelajari secara komprehensif metodologi pengukuran Indeks Kepuasan Masyarakat (IKM). Pembahasan mencakup tahapan pelaksanaan yang sistematis, variabel-variabel utama yang diukur, hingga instrumen yang digunakan dalam proses pengumpulan data. Tidak hanya itu, Anda juga akan memahami metode pengambilan data yang tepat agar hasil pengukuran lebih akurat, relevan, dan dapat digunakan sebagai dasar pengambilan keputusan berbasis dampak.</p>', 4, 1, '2026-04-13 03:58:42', '2026-04-13 04:04:03', NULL),
(53, 22, 'Analisis Data Indeks Kepuasan Masyarakat', '<p>Setelah memahami tahapan inisiasi, perencanaan, hingga pelaksanaan dalam Survei Kepuasan Masyarakat pada sesi sebelumnya, kini saatnya melangkah lebih jauh. Di video ini, kita akan fokus mengupas tahap krusial berikutnya, yaitu analisis data Indeks Kepuasan Masyarakat (IKM). Proses ini akan membantu mengubah data menjadi insight bermakna untuk evaluasi dan peningkatan kualitas program secara terukur dan berdampak.</p>', 5, 1, '2026-04-13 04:00:16', '2026-04-13 04:04:03', NULL),
(54, 22, 'Pelaporan Indeks Kepuasan Masyarakat', '<p>Setelah memahami tahap analisis data Indeks Kepuasan Masyarakat (IKM) di video sebelumnya, kini saatnya melangkah ke tahap akhir yang tak kalah penting, yaitu pelaporan. Pada tahap ini, Anda akan belajar bagaimana menyusun dan menyajikan hasil secara sistematis melalui laporan akhir IKM, sekaligus merumuskan <em>lesson learned</em> sebagai dasar penguatan strategi dan pengembangan program ke depan yang lebih tepat sasaran dan berdampak.</p>', 6, 1, '2026-04-13 04:01:53', '2026-04-13 04:04:03', NULL),
(55, 22, 'TEASER - Indeks Kepuasan Masyarakat', '<p>Banyak program pemberdayaan tampak sukses di atas kertas—kegiatan berjalan, output tercapai, laporan tersusun. Namun, apakah masyarakat benar-benar puas? Tanpa pengukuran yang sistematis, sulit memahami kekuatan dan celah program. Indeks Kepuasan Masyarakat (IKM) hadir sebagai alat ukur objektif dan terstandar. Melalui e-learning Impact Academy, pelajari konsep, metode, hingga analisis IKM untuk memastikan program Anda benar-benar berdampak dan berkelanjutan.</p>', 1, 1, '2026-04-13 04:03:38', '2026-04-13 04:04:03', NULL),
(56, 23, 'TEASER - Social Return on Investment (SROI)', '<p>Dunia bisnis dan organisasi sosial kini dihadapkan pada tantangan yang semakin kompleks dengan ekspektasi stakeholder yang terus meningkat. Menjalankan program saja tidak lagi cukup—setiap inisiatif dituntut mampu menunjukkan dampak nyata. Namun, banyak organisasi masih kesulitan mengukur perubahan, karena laporan sering berfokus pada aktivitas, bukan hasil. Melalui SROI, Impact Academy menghadirkan pembelajaran aplikatif untuk membantu mengukur, mengelola, dan mengkomunikasikan dampak secara terstruktur, sehingga setiap program memiliki nilai yang jelas, kredibel, dan bermakna.</p>', 1, 1, '2026-04-13 04:51:48', '2026-04-13 04:51:48', NULL),
(57, 23, 'Pengantar Pembelajaran - SROI', '<p>Selamat datang di Impact Academy. Pada sesi e-learning ini, Fernando Galang akan menemani Anda memahami Social Return on Investment (SROI) secara komprehensif. Materi mencakup konsep dasar, prinsip social value, tipe SROI, serta tahapan implementasi dari penentuan ruang lingkup hingga pelaporan. Sebelum memulai, silakan kerjakan pretest untuk mengukur pemahaman awal Anda. Mari belajar dan tingkatkan dampak bersama!</p>', 2, 1, '2026-04-13 04:53:21', '2026-04-13 04:53:21', NULL),
(58, 23, 'Definisi dan Konsep Dasar SROI', '<p>Pada video pembuka ini, kita akan mengulas pentingnya Social Return on Investment (SROI) dalam memahami dan mengukur dampak program. SROI membantu melihat sejauh mana investasi menciptakan nilai sosial, ekonomi, dan lingkungan. Pendekatan ini membawa kita melampaui aktivitas semata, menuju pemahaman yang lebih dalam tentang perubahan yang terjadi serta nilai nyata yang dihasilkan.</p>', 3, 1, '2026-04-13 04:56:14', '2026-04-13 04:56:14', NULL),
(59, 23, 'Tahapan SROI (Tahap 1 dan 2)', '<p>Pada video ini, kita akan mulai menyelami tahapan dalam Social Return on Investment (SROI) sebagai pendekatan penting dalam mengukur dampak. Setiap tahap dirancang untuk membantu memastikan proses pengukuran berjalan secara sistematis, terarah, dan berbasis data. Dengan memahami alur ini, kamu dapat menghasilkan analisis dampak yang lebih kredibel, transparan, serta dapat dipertanggungjawabkan secara profesional.</p>', 4, 1, '2026-04-13 04:59:24', '2026-04-13 04:59:24', NULL),
(60, 23, 'Tahapan SROI (Tahap 3 dan 4)', '<p>Setelah memahami tahapan awal dalam penyusunan SROI pada video sebelumnya, kini saatnya melangkah lebih jauh. Di sesi ini, kita akan mendalami tahap ketiga, yaitu mengumpulkan berbagai kejadian yang berkaitan dengan outcome sekaligus memberikan nilainya, serta tahap keempat, yaitu menghitung dampak yang dihasilkan. Pembahasan akan disajikan secara bertahap agar mudah dipahami dan aplikatif. Yuk, kita kupas bersama!</p>', 5, 1, '2026-04-13 05:00:56', '2026-04-13 05:00:56', NULL),
(61, 23, 'Tahapan SROI (Tahap 5 dan 6)', '<p>Setelah memahami tahapan 3 dan 4 dalam penyusunan SROI di video sebelumnya, kini saatnya melangkah lebih jauh. Pada sesi kali ini, kita akan mengupas tahapan berikutnya, yaitu tahap 5 tentang perhitungan SROI serta tahap 6 mengenai analisis dan pelaporan hasil. Kedua tahap ini menjadi kunci untuk menerjemahkan data menjadi insight yang bermakna. Yuk, kita bahas secara bertahap dan mendalam!</p>', 6, 1, '2026-04-13 05:02:22', '2026-04-13 05:02:22', NULL),
(62, 24, 'TEASER - Impact Academy Social Mapping', '<p>Perusahaan beroperasi di tengah dinamika sosial yang terus berubah, dengan karakter, kebutuhan, dan tantangan masyarakat yang beragam di setiap wilayah. Tanpa pemahaman sosial yang tepat, risiko kesalahpahaman hingga konflik dapat menghambat operasional. Social mapping menjadi kunci untuk menyusun strategi yang akurat, merancang program berdampak, dan menjaga keberlanjutan bisnis. Melalui e-learning ini, pelajari cara memetakan sosial, memahami stakeholder, dan merancang program pemberdayaan yang relevan.</p>', 1, 1, '2026-04-17 02:55:31', '2026-04-17 02:55:31', NULL),
(63, 24, 'Pengantar Pembelajaran - Social Mapping', '<p>Selamat datang di Impact Academy. Pada sesi e-learning kali ini, kita akan mengupas tuntas Social Mapping atau pemetaan sosial bersama Fernando Galang. Materi ini dirancang untuk memperdalam pemahaman Anda terkait konsep dasar, identifikasi stakeholder, pendekatan Sustainable Livelihood, hingga penyusunan rekomendasi yang tepat. Sebelum masuk ke pembahasan, silakan kerjakan pretest untuk mengukur pemahaman awal Anda mengenai Social Mapping.</p>', 2, 1, '2026-04-17 02:57:56', '2026-04-17 02:57:56', NULL),
(64, 24, 'Definisi dan Konsep Dasar Social Mapping', '<p>Pada video pembuka ini, kita akan memahami peran penting Social Mapping dalam merancang program yang tepat sasaran. Social Mapping adalah proses mengenali dan memetakan kondisi sosial masyarakat melalui pengumpulan data terkait potensi, kebutuhan, hingga dinamika sosial ekonomi. Lebih dari sekadar angka, pendekatan ini membantu membaca realitas lapangan secara utuh, mulai dari definisi, fungsi, ruang lingkup, tahapan, hingga identifikasi berbasis kebijakan dan keberlanjutan.</p>', 3, 1, '2026-04-17 03:00:10', '2026-04-17 03:00:10', NULL),
(65, 24, 'Pemangku Kepentingan (Stakeholder)', '<p>Pada video ini, kita akan mendalami analisis pemangku kepentingan secara komprehensif. Pembahasan dimulai dari konsep dasar stakeholder analysis, dilanjutkan dengan teknik stakeholder mapping untuk mengidentifikasi peran dan pengaruh, memahami hubungan antar pemangku kepentingan, hingga eksplorasi forum sosial masyarakat sebagai ruang kolaborasi. Materi ini dirancang untuk membantu Anda melihat dinamika aktor secara lebih strategis dan aplikatif.</p>', 4, 1, '2026-04-17 03:02:15', '2026-04-17 03:02:15', NULL),
(66, 24, 'Sustainable Livelihood Approach (SLA)', '<p>Pada video sebelumnya, Anda telah memahami kondisi sosial masyarakat serta analisis stakeholder melalui Social Mapping. Langkah selanjutnya adalah menggali potensi yang dimiliki masyarakat secara lebih mendalam. Pada video kali ini, kita akan membahas pendekatan Sustainable Livelihood Approach (SLA), mulai dari pentingnya SLA, aset yang dimiliki, konteks yang memengaruhi, hingga analisis potensi, masalah, isu, dan kerentanan secara komprehensif.</p>', 5, 1, '2026-04-17 03:04:21', '2026-04-28 04:49:28', NULL),
(67, 24, 'Perumusan Rekomendasi', '<p>Pada video sebelumnya, Anda telah memahami proses analisis dalam social mapping, mulai dari SLA hingga analisis kerentanan. Di sesi kali ini, kita akan masuk ke tahap akhir yang krusial, yaitu penyusunan rekomendasi program. Pembahasan akan mencakup analisis SWOT, penyusunan grand design, Logical Framework Approach (LFA), hingga penentuan prioritas program. Simak sampai tuntas!</p>', 6, 1, '2026-04-17 03:06:04', '2026-04-17 03:06:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `module_progress`
--

CREATE TABLE `module_progress` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `module_id` bigint UNSIGNED NOT NULL,
  `status` enum('locked','in_progress','completed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'locked',
  `started_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_settings`
--

CREATE TABLE `page_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `type` enum('e-learning','learning-package','webinar') COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_settings`
--

INSERT INTO `page_settings` (`id`, `type`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'e-learning', 'Eksplorasi Kelas E-Learning Impact Academy', 'Upgrade skill Anda lewat E-Learning terstruktur yang aplikatif, relevan dengan kebutuhan industri, dan dibimbing oleh praktisi berpengalaman.', '2026-03-26 07:28:53', '2026-04-20 07:04:29'),
(2, 'learning-package', 'Kuasai Skill Secara Menyeluruh dengan Learning Package', 'Upgrade skill Anda melalui paket pembelajaran terstruktur yang komprehensif, terintegrasi, dan siap diterapkan di dunia kerja bersama praktisi berpengalaman.', '2026-03-26 07:28:53', '2026-04-20 07:08:54'),
(3, 'webinar', 'Webinar Series: Insight & Praktik Terbaik Industri', 'Upgrade wawasan Anda melalui webinar interaktif yang membahas isu terkini, insight aplikatif, dan pengalaman langsung dari praktisi berpengalaman.', '2026-03-26 07:28:53', '2026-04-20 07:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('ianalebom@gmail.com', '$2y$12$wlYl6AaqpAiHfB7GNUcBjepiJj../SDcsHgyGMFWdMr4SRfigiFQW', '2026-02-04 11:10:32');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` bigint UNSIGNED NOT NULL,
  `module_id` bigint UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '1',
  `is_pretest` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `module_id`, `title`, `sort_order`, `is_pretest`, `created_at`, `updated_at`) VALUES
(10, 12, 'Quiz #1: Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 1, 0, '2026-02-06 03:43:56', '2026-02-06 03:43:56'),
(11, 10, 'Pre Test - Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 1, 1, '2026-02-23 04:31:47', '2026-02-23 04:31:47'),
(12, 15, 'Post Test - Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 1, 0, '2026-02-23 06:02:29', '2026-02-23 06:02:29'),
(13, 37, 'Pretest - Logical Framework Approach (LFA)', 1, 1, '2026-03-11 06:24:07', '2026-04-20 06:45:20'),
(14, 41, 'Posttest - Logical Framework Approach (LFA)', 1, 0, '2026-03-11 07:15:13', '2026-04-20 06:45:55'),
(15, 42, 'Pretest - ToC', 1, 1, '2026-03-11 07:40:34', '2026-03-11 07:40:34'),
(16, 45, 'Posttest - ToC', 1, 0, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(17, 47, 'Pre Test - Designing CSR Programs that Creating Shared Value (CSV)', 1, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(18, 36, 'Post Test - Designing CSR Programs that Creating Shared Value (CSV)', 1, 0, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(19, 50, 'Pre Test - Indeks Kepuasan Masyarakat', 1, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(20, 54, 'Post Test - Indeks Kepuasan Masyarakat', 1, 0, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(21, 57, 'Pre Test - Social Return on Investment', 1, 0, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(22, 61, 'Post Test - Social Return on Investment', 1, 0, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(23, 63, 'Pre Test - Social Mapping', 1, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(24, 67, 'Post Test - Social Mapping', 1, 0, '2026-04-17 03:52:30', '2026-04-17 03:52:30');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_answers`
--

CREATE TABLE `quiz_answers` (
  `id` bigint UNSIGNED NOT NULL,
  `attempt_id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `option_id` bigint UNSIGNED NOT NULL,
  `is_correct` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz_answers`
--

INSERT INTO `quiz_answers` (`id`, `attempt_id`, `question_id`, `option_id`, `is_correct`, `created_at`, `updated_at`) VALUES
(1, 1, 56, 222, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(2, 1, 57, 227, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(3, 1, 58, 230, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(4, 1, 59, 235, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(5, 1, 60, 239, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(6, 1, 61, 244, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(7, 1, 62, 246, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(8, 1, 63, 249, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(9, 1, 64, 256, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(10, 1, 65, 258, 1, '2026-02-10 02:50:44', '2026-02-10 02:50:44'),
(30, 6, 228, 888, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(31, 6, 229, 890, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(32, 6, 230, 894, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(33, 6, 231, 896, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(34, 6, 232, 902, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(35, 6, 233, 904, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(36, 6, 234, 910, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(37, 6, 235, 912, 0, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(38, 6, 236, 917, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(39, 6, 237, 919, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(40, 6, 238, 921, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(41, 6, 239, 928, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(42, 6, 240, 930, 0, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(43, 6, 241, 935, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(44, 6, 242, 937, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(45, 6, 243, 941, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(46, 6, 244, 945, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(47, 6, 245, 947, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(48, 6, 246, 951, 0, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(49, 6, 247, 955, 1, '2026-03-30 12:37:45', '2026-03-30 12:37:45'),
(50, 7, 56, 222, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(51, 7, 57, 227, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(52, 7, 58, 230, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(53, 7, 59, 235, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(54, 7, 60, 239, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(55, 7, 61, 244, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(56, 7, 62, 245, 0, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(57, 7, 63, 249, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(58, 7, 64, 256, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(59, 7, 65, 258, 1, '2026-03-30 14:54:24', '2026-03-30 14:54:24'),
(60, 8, 228, 885, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(61, 8, 229, 889, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(62, 8, 230, 893, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(63, 8, 231, 896, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(64, 8, 232, 899, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(65, 8, 233, 906, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(66, 8, 234, 907, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(67, 8, 235, 914, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(68, 8, 236, 916, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(69, 8, 237, 919, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(70, 8, 238, 921, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(71, 8, 239, 928, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(72, 8, 240, 930, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(73, 8, 241, 936, 0, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(74, 8, 242, 937, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(75, 8, 243, 941, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(76, 8, 244, 945, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(77, 8, 245, 947, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(78, 8, 246, 954, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(79, 8, 247, 955, 1, '2026-03-30 15:32:20', '2026-03-30 15:32:20'),
(80, 9, 228, 888, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(81, 9, 229, 890, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(82, 9, 230, 894, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(83, 9, 231, 896, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(84, 9, 232, 899, 0, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(85, 9, 233, 904, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(86, 9, 234, 910, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(87, 9, 235, 913, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(88, 9, 236, 917, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(89, 9, 237, 919, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(90, 9, 238, 921, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(91, 9, 239, 928, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(92, 9, 240, 929, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(93, 9, 241, 936, 0, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(94, 9, 242, 937, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(95, 9, 243, 941, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(96, 9, 244, 945, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(97, 9, 245, 947, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(98, 9, 246, 954, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(99, 9, 247, 955, 1, '2026-03-30 15:36:01', '2026-03-30 15:36:01'),
(100, 10, 56, 222, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(101, 10, 57, 227, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(102, 10, 58, 230, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(103, 10, 59, 235, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(104, 10, 60, 239, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(105, 10, 61, 244, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(106, 10, 62, 246, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(107, 10, 63, 249, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(108, 10, 64, 253, 0, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(109, 10, 65, 258, 1, '2026-03-30 16:05:26', '2026-03-30 16:05:26'),
(110, 11, 208, 814, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(111, 11, 209, 816, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(112, 11, 210, 820, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(113, 11, 211, 822, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(114, 11, 212, 825, 0, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(115, 11, 213, 830, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(116, 11, 214, 833, 0, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(117, 11, 215, 839, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(118, 11, 216, 843, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(119, 11, 217, 845, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(120, 11, 218, 847, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(121, 11, 219, 853, 0, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(122, 11, 220, 855, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(123, 11, 221, 861, 0, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(124, 11, 222, 863, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(125, 11, 223, 867, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(126, 11, 224, 871, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(127, 11, 225, 873, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(128, 11, 226, 880, 0, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(129, 11, 227, 881, 1, '2026-03-30 17:19:30', '2026-03-30 17:19:30'),
(130, 12, 208, 814, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(131, 12, 209, 816, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(132, 12, 210, 820, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(133, 12, 211, 822, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(134, 12, 212, 828, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(135, 12, 213, 830, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(136, 12, 214, 833, 0, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(137, 12, 215, 839, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(138, 12, 216, 843, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(139, 12, 217, 845, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(140, 12, 218, 847, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(141, 12, 219, 851, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(142, 12, 220, 855, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(143, 12, 221, 859, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(144, 12, 222, 863, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(145, 12, 223, 867, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(146, 12, 224, 871, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(147, 12, 225, 873, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(148, 12, 226, 877, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(149, 12, 227, 881, 1, '2026-03-30 17:24:05', '2026-03-30 17:24:05'),
(150, 13, 228, 885, 0, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(151, 13, 229, 890, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(152, 13, 230, 894, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(153, 13, 231, 896, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(154, 13, 232, 902, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(155, 13, 233, 904, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(156, 13, 234, 907, 0, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(157, 13, 235, 913, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(158, 13, 236, 917, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(159, 13, 237, 919, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(160, 13, 238, 921, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(161, 13, 239, 928, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(162, 13, 240, 929, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(163, 13, 241, 935, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(164, 13, 242, 937, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(165, 13, 243, 941, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(166, 13, 244, 945, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(167, 13, 245, 947, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(168, 13, 246, 954, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(169, 13, 247, 955, 1, '2026-03-30 23:52:32', '2026-03-30 23:52:32'),
(170, 14, 228, 888, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(171, 14, 229, 890, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(172, 14, 230, 894, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(173, 14, 231, 896, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(174, 14, 232, 902, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(175, 14, 233, 904, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(176, 14, 234, 907, 0, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(177, 14, 235, 913, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(178, 14, 236, 917, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(179, 14, 237, 920, 0, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(180, 14, 238, 921, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(181, 14, 239, 928, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(182, 14, 240, 930, 0, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(183, 14, 241, 935, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(184, 14, 242, 937, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(185, 14, 243, 941, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(186, 14, 244, 945, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(187, 14, 245, 947, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(188, 14, 246, 954, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(189, 14, 247, 955, 1, '2026-03-30 23:55:11', '2026-03-30 23:55:11'),
(190, 15, 56, 222, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(191, 15, 57, 227, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(192, 15, 58, 230, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(193, 15, 59, 235, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(194, 15, 60, 239, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(195, 15, 61, 244, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(196, 15, 62, 246, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(197, 15, 63, 249, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(198, 15, 64, 256, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(199, 15, 65, 258, 1, '2026-03-31 00:18:02', '2026-03-31 00:18:02'),
(200, 16, 228, 885, 0, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(201, 16, 229, 890, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(202, 16, 230, 894, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(203, 16, 231, 896, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(204, 16, 232, 902, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(205, 16, 233, 904, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(206, 16, 234, 907, 0, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(207, 16, 235, 913, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(208, 16, 236, 917, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(209, 16, 237, 919, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(210, 16, 238, 921, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(211, 16, 239, 928, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(212, 16, 240, 930, 0, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(213, 16, 241, 936, 0, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(214, 16, 242, 937, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(215, 16, 243, 941, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(216, 16, 244, 945, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(217, 16, 245, 947, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(218, 16, 246, 951, 0, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(219, 16, 247, 955, 1, '2026-03-31 01:48:11', '2026-03-31 01:48:11'),
(220, 17, 228, 888, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(221, 17, 229, 890, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(222, 17, 230, 894, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(223, 17, 231, 896, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(224, 17, 232, 902, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(225, 17, 233, 904, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(226, 17, 234, 910, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(227, 17, 235, 913, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(228, 17, 236, 917, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(229, 17, 237, 919, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(230, 17, 238, 921, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(231, 17, 239, 928, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(232, 17, 240, 929, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(233, 17, 241, 935, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(234, 17, 242, 937, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(235, 17, 243, 941, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(236, 17, 244, 945, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(237, 17, 245, 947, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(238, 17, 246, 954, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(239, 17, 247, 955, 1, '2026-03-31 01:59:38', '2026-03-31 01:59:38'),
(240, 18, 56, 222, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(241, 18, 57, 227, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(242, 18, 58, 230, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(243, 18, 59, 235, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(244, 18, 60, 239, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(245, 18, 61, 244, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(246, 18, 62, 246, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(247, 18, 63, 249, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(248, 18, 64, 256, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(249, 18, 65, 258, 1, '2026-03-31 02:17:08', '2026-03-31 02:17:08'),
(250, 19, 208, 814, 1, '2026-03-31 03:20:27', '2026-03-31 03:20:27'),
(251, 19, 209, 816, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(252, 19, 210, 820, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(253, 19, 211, 822, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(254, 19, 212, 828, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(255, 19, 213, 830, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(256, 19, 214, 836, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(257, 19, 215, 839, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(258, 19, 216, 843, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(259, 19, 217, 845, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(260, 19, 218, 847, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(261, 19, 219, 854, 0, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(262, 19, 220, 855, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(263, 19, 221, 861, 0, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(264, 19, 222, 863, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(265, 19, 223, 867, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(266, 19, 224, 871, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(267, 19, 225, 873, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(268, 19, 226, 880, 0, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(269, 19, 227, 881, 1, '2026-03-31 03:20:28', '2026-03-31 03:20:28'),
(270, 20, 208, 814, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(271, 20, 209, 816, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(272, 20, 210, 820, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(273, 20, 211, 822, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(274, 20, 212, 828, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(275, 20, 213, 830, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(276, 20, 214, 836, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(277, 20, 215, 839, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(278, 20, 216, 843, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(279, 20, 217, 845, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(280, 20, 218, 847, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(281, 20, 219, 854, 0, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(282, 20, 220, 855, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(283, 20, 221, 861, 0, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(284, 20, 222, 863, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(285, 20, 223, 867, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(286, 20, 224, 871, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(287, 20, 225, 873, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(288, 20, 226, 880, 0, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(289, 20, 227, 881, 1, '2026-03-31 03:25:32', '2026-03-31 03:25:32'),
(290, 21, 208, 814, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(291, 21, 209, 816, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(292, 21, 210, 820, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(293, 21, 211, 822, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(294, 21, 212, 828, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(295, 21, 213, 830, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(296, 21, 214, 836, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(297, 21, 215, 839, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(298, 21, 216, 843, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(299, 21, 217, 845, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(300, 21, 218, 847, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(301, 21, 219, 851, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(302, 21, 220, 855, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(303, 21, 221, 861, 0, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(304, 21, 222, 863, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(305, 21, 223, 867, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(306, 21, 224, 871, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(307, 21, 225, 873, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(308, 21, 226, 877, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(309, 21, 227, 881, 1, '2026-03-31 03:29:53', '2026-03-31 03:29:53'),
(310, 22, 228, 888, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(311, 22, 229, 890, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(312, 22, 230, 894, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(313, 22, 231, 896, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(314, 22, 232, 902, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(315, 22, 233, 904, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(316, 22, 234, 907, 0, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(317, 22, 235, 913, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(318, 22, 236, 917, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(319, 22, 237, 920, 0, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(320, 22, 238, 921, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(321, 22, 239, 928, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(322, 22, 240, 929, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(323, 22, 241, 935, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(324, 22, 242, 937, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(325, 22, 243, 941, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(326, 22, 244, 945, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(327, 22, 245, 947, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(328, 22, 246, 951, 0, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(329, 22, 247, 955, 1, '2026-03-31 04:19:47', '2026-03-31 04:19:47'),
(330, 23, 56, 222, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(331, 23, 57, 227, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(332, 23, 58, 230, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(333, 23, 59, 235, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(334, 23, 60, 239, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(335, 23, 61, 244, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(336, 23, 62, 246, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(337, 23, 63, 249, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(338, 23, 64, 256, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(339, 23, 65, 258, 1, '2026-03-31 04:23:03', '2026-03-31 04:23:03'),
(340, 24, 208, 814, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(341, 24, 209, 816, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(342, 24, 210, 820, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(343, 24, 211, 822, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(344, 24, 212, 828, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(345, 24, 213, 830, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(346, 24, 214, 835, 0, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(347, 24, 215, 839, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(348, 24, 216, 843, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(349, 24, 217, 846, 0, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(350, 24, 218, 847, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(351, 24, 219, 854, 0, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(352, 24, 220, 855, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(353, 24, 221, 861, 0, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(354, 24, 222, 863, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(355, 24, 223, 867, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(356, 24, 224, 872, 0, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(357, 24, 225, 873, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(358, 24, 226, 877, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(359, 24, 227, 881, 1, '2026-03-31 04:26:58', '2026-03-31 04:26:58'),
(360, 25, 208, 814, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(361, 25, 209, 816, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(362, 25, 210, 820, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(363, 25, 211, 822, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(364, 25, 212, 828, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(365, 25, 213, 830, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(366, 25, 214, 833, 0, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(367, 25, 215, 839, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(368, 25, 216, 843, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(369, 25, 217, 846, 0, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(370, 25, 218, 847, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(371, 25, 219, 854, 0, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(372, 25, 220, 855, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(373, 25, 221, 861, 0, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(374, 25, 222, 863, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(375, 25, 223, 867, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(376, 25, 224, 871, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(377, 25, 225, 873, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(378, 25, 226, 880, 0, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(379, 25, 227, 881, 1, '2026-03-31 04:28:55', '2026-03-31 04:28:55'),
(380, 26, 208, 814, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(381, 26, 209, 816, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(382, 26, 210, 820, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(383, 26, 211, 822, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(384, 26, 212, 828, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(385, 26, 213, 830, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(386, 26, 214, 833, 0, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(387, 26, 215, 839, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(388, 26, 216, 843, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(389, 26, 217, 845, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(390, 26, 218, 847, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(391, 26, 219, 854, 0, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(392, 26, 220, 855, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(393, 26, 221, 861, 0, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(394, 26, 222, 863, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(395, 26, 223, 867, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(396, 26, 224, 872, 0, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(397, 26, 225, 873, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(398, 26, 226, 880, 0, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(399, 26, 227, 881, 1, '2026-03-31 04:31:32', '2026-03-31 04:31:32'),
(400, 27, 208, 814, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(401, 27, 209, 816, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(402, 27, 210, 820, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(403, 27, 211, 822, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(404, 27, 212, 828, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(405, 27, 213, 830, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(406, 27, 214, 833, 0, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(407, 27, 215, 839, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(408, 27, 216, 843, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(409, 27, 217, 845, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(410, 27, 218, 847, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(411, 27, 219, 854, 0, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(412, 27, 220, 855, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(413, 27, 221, 861, 0, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(414, 27, 222, 863, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(415, 27, 223, 867, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(416, 27, 224, 871, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(417, 27, 225, 873, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(418, 27, 226, 877, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(419, 27, 227, 881, 1, '2026-03-31 04:34:26', '2026-03-31 04:34:26'),
(420, 28, 208, 814, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(421, 28, 209, 816, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(422, 28, 210, 820, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(423, 28, 211, 822, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(424, 28, 212, 828, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(425, 28, 213, 830, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(426, 28, 214, 833, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(427, 28, 215, 839, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(428, 28, 216, 843, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(429, 28, 217, 846, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(430, 28, 218, 847, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(431, 28, 219, 854, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(432, 28, 220, 856, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(433, 28, 221, 861, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(434, 28, 222, 863, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(435, 28, 223, 867, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(436, 28, 224, 871, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(437, 28, 225, 873, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(438, 28, 226, 880, 0, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(439, 28, 227, 881, 1, '2026-03-31 06:27:01', '2026-03-31 06:27:01'),
(440, 29, 208, 814, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(441, 29, 209, 816, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(442, 29, 210, 820, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(443, 29, 211, 822, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(444, 29, 212, 828, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(445, 29, 213, 830, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(446, 29, 214, 833, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(447, 29, 215, 837, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(448, 29, 216, 843, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(449, 29, 217, 845, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(450, 29, 218, 847, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(451, 29, 219, 854, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(452, 29, 220, 856, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(453, 29, 221, 861, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(454, 29, 222, 863, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(455, 29, 223, 867, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(456, 29, 224, 871, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(457, 29, 225, 873, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(458, 29, 226, 880, 0, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(459, 29, 227, 881, 1, '2026-03-31 06:56:41', '2026-03-31 06:56:41'),
(460, 30, 208, 814, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(461, 30, 209, 816, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(462, 30, 210, 820, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(463, 30, 211, 822, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(464, 30, 212, 828, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(465, 30, 213, 830, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(466, 30, 214, 833, 0, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(467, 30, 215, 839, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(468, 30, 216, 843, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(469, 30, 217, 845, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(470, 30, 218, 847, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(471, 30, 219, 854, 0, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(472, 30, 220, 855, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(473, 30, 221, 861, 0, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(474, 30, 222, 863, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(475, 30, 223, 867, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(476, 30, 224, 871, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(477, 30, 225, 873, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(478, 30, 226, 877, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(479, 30, 227, 881, 1, '2026-03-31 07:04:01', '2026-03-31 07:04:01'),
(480, 32, 56, 222, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(481, 32, 57, 227, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(482, 32, 58, 230, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(483, 32, 59, 235, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(484, 32, 60, 239, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(485, 32, 61, 244, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(486, 32, 62, 246, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(487, 32, 63, 249, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(488, 32, 64, 256, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(489, 32, 65, 258, 1, '2026-03-31 09:43:31', '2026-03-31 09:43:31'),
(490, 33, 228, 888, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(491, 33, 229, 890, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(492, 33, 230, 894, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(493, 33, 231, 896, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(494, 33, 232, 902, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(495, 33, 233, 904, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(496, 33, 234, 910, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(497, 33, 235, 911, 0, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(498, 33, 236, 917, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(499, 33, 237, 919, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(500, 33, 238, 921, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(501, 33, 239, 928, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(502, 33, 240, 929, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(503, 33, 241, 935, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(504, 33, 242, 937, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(505, 33, 243, 941, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(506, 33, 244, 945, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(507, 33, 245, 947, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(508, 33, 246, 954, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(509, 33, 247, 955, 1, '2026-03-31 10:46:02', '2026-03-31 10:46:02'),
(510, 34, 56, 222, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(511, 34, 57, 227, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(512, 34, 58, 230, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(513, 34, 59, 235, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(514, 34, 60, 239, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(515, 34, 61, 244, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(516, 34, 62, 246, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(517, 34, 63, 249, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(518, 34, 64, 256, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(519, 34, 65, 258, 1, '2026-03-31 10:55:57', '2026-03-31 10:55:57'),
(520, 35, 208, 814, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(521, 35, 209, 816, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(522, 35, 210, 820, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(523, 35, 211, 822, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(524, 35, 212, 828, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(525, 35, 213, 830, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(526, 35, 214, 836, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(527, 35, 215, 837, 0, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(528, 35, 216, 843, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(529, 35, 217, 845, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(530, 35, 218, 847, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(531, 35, 219, 854, 0, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(532, 35, 220, 855, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(533, 35, 221, 861, 0, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(534, 35, 222, 863, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(535, 35, 223, 867, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(536, 35, 224, 871, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(537, 35, 225, 873, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(538, 35, 226, 880, 0, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(539, 35, 227, 881, 1, '2026-03-31 11:36:06', '2026-03-31 11:36:06'),
(540, 36, 208, 814, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(541, 36, 209, 816, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(542, 36, 210, 820, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(543, 36, 211, 822, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(544, 36, 212, 828, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(545, 36, 213, 830, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(546, 36, 214, 835, 0, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(547, 36, 215, 839, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(548, 36, 216, 843, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(549, 36, 217, 845, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(550, 36, 218, 847, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(551, 36, 219, 854, 0, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(552, 36, 220, 856, 0, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(553, 36, 221, 861, 0, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(554, 36, 222, 863, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(555, 36, 223, 867, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(556, 36, 224, 871, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(557, 36, 225, 873, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(558, 36, 226, 880, 0, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(559, 36, 227, 881, 1, '2026-04-01 07:21:30', '2026-04-01 07:21:30'),
(560, 31, 228, 888, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(561, 31, 229, 890, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(562, 31, 230, 894, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(563, 31, 231, 896, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(564, 31, 232, 902, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(565, 31, 233, 903, 0, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(566, 31, 234, 907, 0, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(567, 31, 235, 913, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(568, 31, 236, 915, 0, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(569, 31, 237, 919, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(570, 31, 238, 922, 0, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(571, 31, 239, 928, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(572, 31, 240, 929, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(573, 31, 241, 935, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(574, 31, 242, 937, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(575, 31, 243, 941, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(576, 31, 244, 945, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(577, 31, 245, 947, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(578, 31, 246, 954, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(579, 31, 247, 955, 1, '2026-04-01 07:22:48', '2026-04-01 07:22:48'),
(580, 37, 208, 814, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(581, 37, 209, 816, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(582, 37, 210, 820, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(583, 37, 211, 822, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(584, 37, 212, 828, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(585, 37, 213, 830, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(586, 37, 214, 835, 0, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(587, 37, 215, 839, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(588, 37, 216, 841, 0, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(589, 37, 217, 845, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(590, 37, 218, 847, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(591, 37, 219, 853, 0, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(592, 37, 220, 855, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(593, 37, 221, 861, 0, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(594, 37, 222, 863, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(595, 37, 223, 867, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(596, 37, 224, 871, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(597, 37, 225, 873, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(598, 37, 226, 880, 0, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(599, 37, 227, 881, 1, '2026-04-01 07:25:18', '2026-04-01 07:25:18'),
(600, 38, 56, 222, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(601, 38, 57, 227, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(602, 38, 58, 230, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(603, 38, 59, 235, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(604, 38, 60, 239, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(605, 38, 61, 244, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(606, 38, 62, 246, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(607, 38, 63, 249, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(608, 38, 64, 256, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(609, 38, 65, 258, 1, '2026-04-01 07:34:52', '2026-04-01 07:34:52'),
(610, 39, 208, 814, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(611, 39, 209, 816, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(612, 39, 210, 820, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(613, 39, 211, 822, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(614, 39, 212, 828, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(615, 39, 213, 830, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(616, 39, 214, 836, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(617, 39, 215, 839, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(618, 39, 216, 843, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(619, 39, 217, 845, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(620, 39, 218, 847, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(621, 39, 219, 854, 0, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(622, 39, 220, 855, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(623, 39, 221, 861, 0, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(624, 39, 222, 863, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(625, 39, 223, 867, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(626, 39, 224, 871, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(627, 39, 225, 873, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(628, 39, 226, 880, 0, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(629, 39, 227, 881, 1, '2026-04-01 07:42:17', '2026-04-01 07:42:17'),
(630, 40, 208, 814, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(631, 40, 209, 816, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(632, 40, 210, 820, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(633, 40, 211, 822, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(634, 40, 212, 828, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(635, 40, 213, 830, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(636, 40, 214, 835, 0, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(637, 40, 215, 839, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(638, 40, 216, 841, 0, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(639, 40, 217, 845, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(640, 40, 218, 847, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(641, 40, 219, 853, 0, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(642, 40, 220, 855, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(643, 40, 221, 861, 0, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(644, 40, 222, 863, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(645, 40, 223, 867, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(646, 40, 224, 871, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(647, 40, 225, 873, 1, '2026-04-01 07:44:01', '2026-04-01 07:44:01'),
(648, 40, 226, 880, 0, '2026-04-01 07:44:02', '2026-04-01 07:44:02'),
(649, 40, 227, 881, 1, '2026-04-01 07:44:02', '2026-04-01 07:44:02'),
(650, 41, 208, 814, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(651, 41, 209, 816, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(652, 41, 210, 820, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(653, 41, 211, 822, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(654, 41, 212, 828, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(655, 41, 213, 830, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(656, 41, 214, 836, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(657, 41, 215, 839, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(658, 41, 216, 843, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(659, 41, 217, 845, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(660, 41, 218, 847, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(661, 41, 219, 854, 0, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(662, 41, 220, 855, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(663, 41, 221, 859, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(664, 41, 222, 863, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(665, 41, 223, 867, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(666, 41, 224, 871, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(667, 41, 225, 873, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(668, 41, 226, 877, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(669, 41, 227, 881, 1, '2026-04-01 07:48:07', '2026-04-01 07:48:07'),
(670, 42, 208, 814, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(671, 42, 209, 816, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(672, 42, 210, 820, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(673, 42, 211, 822, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(674, 42, 212, 828, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(675, 42, 213, 830, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(676, 42, 214, 836, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(677, 42, 215, 839, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(678, 42, 216, 843, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(679, 42, 217, 845, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(680, 42, 218, 847, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(681, 42, 219, 851, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(682, 42, 220, 855, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(683, 42, 221, 861, 0, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(684, 42, 222, 863, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(685, 42, 223, 867, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(686, 42, 224, 871, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(687, 42, 225, 873, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(688, 42, 226, 880, 0, '2026-04-01 09:53:48', '2026-04-01 09:53:48'),
(689, 42, 227, 881, 1, '2026-04-01 09:53:48', '2026-04-01 09:53:48');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_attempts`
--

CREATE TABLE `quiz_attempts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `quiz_id` bigint UNSIGNED NOT NULL,
  `started_at` timestamp NULL DEFAULT NULL,
  `submitted_at` timestamp NULL DEFAULT NULL,
  `score` int NOT NULL DEFAULT '0',
  `is_passed` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz_attempts`
--

INSERT INTO `quiz_attempts` (`id`, `user_id`, `quiz_id`, `started_at`, `submitted_at`, `score`, `is_passed`, `created_at`, `updated_at`) VALUES
(1, 7, 10, '2026-02-10 02:49:19', '2026-02-10 02:50:44', 100, 1, '2026-02-10 02:49:19', '2026-02-10 02:50:44'),
(2, 7, 12, '2026-03-27 05:02:47', '2026-03-27 05:06:18', 60, 0, '2026-03-27 05:02:47', '2026-03-27 05:06:18'),
(3, 7, 12, '2026-03-27 07:07:16', NULL, 0, 0, '2026-03-27 07:07:16', '2026-03-27 07:07:16'),
(4, 7, 11, '2026-03-27 07:07:50', NULL, 0, 0, '2026-03-27 07:07:50', '2026-03-27 07:07:50'),
(5, 8, 11, '2026-03-30 12:30:06', NULL, 0, 0, '2026-03-30 12:30:06', '2026-03-30 12:30:06'),
(6, 13, 11, '2026-03-30 12:32:59', '2026-03-30 12:37:45', 85, 1, '2026-03-30 12:32:59', '2026-03-30 12:37:45'),
(7, 13, 10, '2026-03-30 14:52:56', '2026-03-30 14:54:24', 90, 1, '2026-03-30 14:52:56', '2026-03-30 14:54:24'),
(8, 12, 11, '2026-03-30 15:29:01', '2026-03-30 15:32:20', 50, 0, '2026-03-30 15:29:01', '2026-03-30 15:32:20'),
(9, 12, 11, '2026-03-30 15:34:06', '2026-03-30 15:36:01', 90, 1, '2026-03-30 15:34:06', '2026-03-30 15:36:01'),
(10, 12, 10, '2026-03-30 16:03:34', '2026-03-30 16:05:26', 90, 1, '2026-03-30 16:03:34', '2026-03-30 16:05:26'),
(11, 12, 12, '2026-03-30 17:17:04', '2026-03-30 17:19:30', 75, 1, '2026-03-30 17:17:04', '2026-03-30 17:19:30'),
(12, 12, 12, '2026-03-30 17:22:19', '2026-03-30 17:24:05', 95, 1, '2026-03-30 17:22:19', '2026-03-30 17:24:05'),
(13, 14, 11, '2026-03-30 23:44:33', '2026-03-30 23:52:32', 90, 1, '2026-03-30 23:44:33', '2026-03-30 23:52:32'),
(14, 17, 11, '2026-03-30 23:45:40', '2026-03-30 23:55:11', 85, 1, '2026-03-30 23:45:40', '2026-03-30 23:55:11'),
(15, 17, 10, '2026-03-31 00:14:42', '2026-03-31 00:18:02', 100, 1, '2026-03-31 00:14:42', '2026-03-31 00:18:02'),
(16, 9, 11, '2026-03-31 01:39:39', '2026-03-31 01:48:11', 75, 1, '2026-03-31 01:39:39', '2026-03-31 01:48:11'),
(17, 9, 11, '2026-03-31 01:57:45', '2026-03-31 01:59:38', 100, 1, '2026-03-31 01:57:45', '2026-03-31 01:59:38'),
(18, 9, 10, '2026-03-31 02:14:44', '2026-03-31 02:17:08', 100, 1, '2026-03-31 02:14:44', '2026-03-31 02:17:08'),
(19, 9, 12, '2026-03-31 03:18:48', '2026-03-31 03:20:28', 85, 1, '2026-03-31 03:18:48', '2026-03-31 03:20:28'),
(20, 9, 12, '2026-03-31 03:23:44', '2026-03-31 03:25:32', 85, 1, '2026-03-31 03:23:44', '2026-03-31 03:25:32'),
(21, 9, 12, '2026-03-31 03:26:31', '2026-03-31 03:29:53', 95, 1, '2026-03-31 03:26:31', '2026-03-31 03:29:53'),
(22, 11, 11, '2026-03-31 04:14:29', '2026-03-31 04:19:47', 85, 1, '2026-03-31 04:14:29', '2026-03-31 04:19:47'),
(23, 11, 10, '2026-03-31 04:21:16', '2026-03-31 04:23:03', 100, 1, '2026-03-31 04:21:16', '2026-03-31 04:23:03'),
(24, 11, 12, '2026-03-31 04:23:41', '2026-03-31 04:26:58', 75, 1, '2026-03-31 04:23:41', '2026-03-31 04:26:58'),
(25, 11, 12, '2026-03-31 04:27:28', '2026-03-31 04:28:55', 75, 1, '2026-03-31 04:27:28', '2026-03-31 04:28:55'),
(26, 11, 12, '2026-03-31 04:29:41', '2026-03-31 04:31:32', 75, 1, '2026-03-31 04:29:41', '2026-03-31 04:31:32'),
(27, 11, 12, '2026-03-31 04:32:25', '2026-03-31 04:34:26', 85, 1, '2026-03-31 04:32:25', '2026-03-31 04:34:26'),
(28, 17, 12, '2026-03-31 06:22:49', '2026-03-31 06:27:01', 70, 1, '2026-03-31 06:22:49', '2026-03-31 06:27:01'),
(29, 17, 12, '2026-03-31 06:50:51', '2026-03-31 06:56:41', 70, 1, '2026-03-31 06:50:51', '2026-03-31 06:56:41'),
(30, 13, 12, '2026-03-31 07:00:28', '2026-03-31 07:04:01', 85, 1, '2026-03-31 07:00:28', '2026-03-31 07:04:01'),
(31, 15, 11, '2026-03-31 09:26:57', '2026-04-01 07:22:48', 80, 1, '2026-03-31 09:26:57', '2026-04-01 07:22:48'),
(32, 14, 10, '2026-03-31 09:41:36', '2026-03-31 09:43:31', 100, 1, '2026-03-31 09:41:36', '2026-03-31 09:43:31'),
(33, 16, 11, '2026-03-31 10:32:48', '2026-03-31 10:46:02', 95, 1, '2026-03-31 10:32:48', '2026-03-31 10:46:02'),
(34, 16, 10, '2026-03-31 10:52:27', '2026-03-31 10:55:57', 100, 1, '2026-03-31 10:52:27', '2026-03-31 10:55:57'),
(35, 16, 12, '2026-03-31 10:57:39', '2026-03-31 11:36:06', 80, 1, '2026-03-31 10:57:39', '2026-03-31 11:36:06'),
(36, 14, 12, '2026-04-01 07:16:30', '2026-04-01 07:21:30', 75, 1, '2026-04-01 07:16:30', '2026-04-01 07:21:30'),
(37, 14, 12, '2026-04-01 07:23:15', '2026-04-01 07:25:18', 75, 1, '2026-04-01 07:23:15', '2026-04-01 07:25:18'),
(38, 15, 10, '2026-04-01 07:32:59', '2026-04-01 07:34:52', 100, 1, '2026-04-01 07:32:59', '2026-04-01 07:34:52'),
(39, 15, 12, '2026-04-01 07:37:01', '2026-04-01 07:42:17', 85, 1, '2026-04-01 07:37:01', '2026-04-01 07:42:17'),
(40, 14, 12, '2026-04-01 07:40:40', '2026-04-01 07:44:02', 75, 1, '2026-04-01 07:40:40', '2026-04-01 07:44:02'),
(41, 14, 12, '2026-04-01 07:46:08', '2026-04-01 07:48:07', 95, 1, '2026-04-01 07:46:08', '2026-04-01 07:48:07'),
(42, 15, 12, '2026-04-01 09:50:35', '2026-04-01 09:53:48', 90, 1, '2026-04-01 09:50:35', '2026-04-01 09:53:48');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_options`
--

CREATE TABLE `quiz_options` (
  `id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `label` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT '0',
  `sort_order` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz_options`
--

INSERT INTO `quiz_options` (`id`, `question_id`, `label`, `is_correct`, `sort_order`, `created_at`, `updated_at`) VALUES
(221, 56, 'Pertumbuhan teknologi', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(222, 56, 'Perubahan iklim, geopolitik, permasalahan lingkungan, dan ketimpangan sosial', 1, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(223, 56, 'Persaingan pasar global', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(224, 56, 'Digitalisasi ekonomi', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(225, 57, 'Pertumbuhan ekonomi semata', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(226, 57, 'Stabilitas politik', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(227, 57, 'Keseimbangan ekonomi, lingkungan, dan sosial', 1, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(228, 57, 'Inovasi teknologi', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(229, 58, 'Pembangunan ekonomi', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(230, 58, 'Pembangunan sosial', 1, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(231, 58, 'Pembangunan industri', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(232, 58, 'Pembangunan teknologi', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(233, 59, 'Peningkatan laba', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(234, 59, 'Penguatan pasar', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(235, 59, 'Perlindungan dan pelestarian lingkungan', 1, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(236, 59, 'Peningkatan produktivitas', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(237, 60, 'Program sosial', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(238, 60, 'Pelestarian budaya', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(239, 60, 'Pertumbuhan ekonomi dan keberlanjutan bisnis', 1, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(240, 60, 'Partisipasi masyarakat', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(241, 61, 'Regulasi yang ketat', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(242, 61, 'Efisiensi biaya', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(243, 61, 'Kampanye iklan', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(244, 61, 'Pemberdayaan dan hubungan baik dengan masyarakat', 1, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(245, 62, 'Objek pembangunan', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(246, 62, 'Subjek pembangunan', 1, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(247, 62, 'Penerima bantuan', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(248, 62, 'Target proyek', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(249, 63, 'Peningkatan keberdayaan sosial dan psikologis', 1, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(250, 63, 'Ketergantungan pada perusahaan', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(251, 63, 'Penurunan partisipasi', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(252, 63, 'Sentralisasi keputusan', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(253, 64, 'People-centered ke production-centered', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(254, 64, 'Charity ke bantuan langsung', 0, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(255, 64, 'Sosial ke ekonomi', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(256, 64, 'Production-centered ke people-centered', 1, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(257, 65, 'Pemasaran produk', 0, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(258, 65, 'Manajemen risiko dan penciptaan dampak', 1, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(259, 65, 'Penurunan pajak', 0, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(260, 65, 'Restrukturisasi perusahaan', 0, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(651, 168, 'Metode evaluasi keuangan program', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(652, 168, 'Metode yang menjelaskan bagaimana suatu intervensi menghasilkan perubahan tertentu', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(653, 168, 'Teknik pengumpulan data penelitian', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(654, 168, 'Model pelaporan kegiatan organisasi', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(655, 169, 'Anggaran dan keuntungan', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(656, 169, 'Kegiatan dan laporan keuangan', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(657, 169, 'Intervensi yang dilakukan dengan perubahan yang dihasilkan', 1, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(658, 169, 'Organisasi dan pemerintah', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(659, 170, 'Analisis pasar', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(660, 170, 'Analisis sebab-akibat', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(661, 170, 'Analisis kompetitor', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(662, 170, 'Analisis profit', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(663, 171, 'Program sosial', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(664, 171, 'Proyek pembangunan', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(665, 171, 'Kebijakan publik', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(666, 171, 'Penjualan produk komersial semata', 1, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(667, 172, 'Mengurangi biaya operasional', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(668, 172, 'Memastikan program menghasilkan perubahan yang terukur', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(669, 172, 'Meningkatkan jumlah peserta kegiatan', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(670, 172, 'Mengurangi durasi program', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(671, 173, 'Perencanaan saja', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(672, 173, 'Implementasi saja', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(673, 173, 'Evaluasi saja', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(674, 173, 'Perencanaan, implementasi, pemantauan, dan evaluasi', 1, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(675, 174, 'Mengganti program lama', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(676, 174, 'Mengidentifikasi masalah yang ingin diatasi', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(677, 174, 'Menghitung pajak program', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(678, 174, 'Menyusun laporan tahunan', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(679, 175, 'Menyusun laporan keuangan', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(680, 175, 'Mengembangkan strategi dan roadmap perubahan', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(681, 175, 'Mengurangi jumlah kegiatan', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(682, 175, 'Menyederhanakan organisasi', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(683, 176, 'Mengalokasikan sumber daya secara efektif', 1, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(684, 176, 'Mengurangi jumlah stakeholder', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(685, 176, 'Menghapus aktivitas program', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(686, 176, 'Mengganti tujuan program', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(687, 177, 'Kerangka kerja pelaksanaan kegiatan', 1, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(688, 177, 'Alat audit keuangan', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(689, 177, 'Sistem manajemen SDM', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(690, 177, 'Sistem pemasaran program', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(691, 178, 'Manajemen organisasi', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(692, 178, 'Mitra kerja', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(693, 178, 'Penerima manfaat', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(694, 178, 'Semua pemangku kepentingan', 1, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(695, 179, 'Stakeholder', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(696, 179, 'Input', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(697, 179, 'Activity', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(698, 179, 'Semua benar', 1, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(699, 180, 'Outcome', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(700, 180, 'Input', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(701, 180, 'Impact', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(702, 180, 'Output', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(703, 181, 'Activity', 1, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(704, 181, 'Input', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(705, 181, 'Impact', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(706, 181, 'Outcome', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(707, 182, 'Outcome', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(708, 182, 'Output', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(709, 182, 'Impact', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(710, 182, 'Input', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(711, 183, 'Activity', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(712, 183, 'Outcome', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(713, 183, 'Impact', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(714, 183, 'Input', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(715, 184, 'Output', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(716, 184, 'Outcome', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(717, 184, 'Impact', 1, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(718, 184, 'Activity', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(719, 185, 'Orang yang menerima gaji dari program', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(720, 185, 'Pihak yang memiliki kepentingan atau terlibat dalam program', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(721, 185, 'Hanya pihak pemerintah', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(722, 185, 'Hanya penerima manfaat', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(723, 186, 'Forecasting', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(724, 186, 'Backcasting', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(725, 186, 'Benchmarking', 0, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(726, 186, 'Brainstorming', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(727, 187, 'Memulai dari kegiatan yang tersedia', 0, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(728, 187, 'Memulai dari sumber daya yang dimiliki', 0, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(729, 187, 'Memulai dari dampak yang diinginkan kemudian menelusuri langkah ke belakang', 1, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(730, 187, 'Memulai dari laporan evaluasi', 0, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(731, 188, 'Metode evaluasi keuangan program', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(732, 188, 'Metode yang menjelaskan bagaimana suatu intervensi menghasilkan perubahan tertentu', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(733, 188, 'Teknik pengumpulan data penelitian', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(734, 188, 'Model pelaporan kegiatan organisasi', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(735, 189, 'Anggaran dan keuntungan', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(736, 189, 'Kegiatan dan laporan keuangan', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(737, 189, 'Intervensi yang dilakukan dengan perubahan yang dihasilkan', 1, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(738, 189, 'Organisasi dan pemerintah', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(739, 190, 'Analisis pasar', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(740, 190, 'Analisis sebab-akibat', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(741, 190, 'Analisis kompetitor', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(742, 190, 'Analisis profit', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(743, 191, 'Program sosial', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(744, 191, 'Proyek pembangunan', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(745, 191, 'Kebijakan publik', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(746, 191, 'Penjualan produk komersial semata', 1, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(747, 192, 'Mengurangi biaya operasional', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(748, 192, 'Memastikan program menghasilkan perubahan yang terukur', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(749, 192, 'Meningkatkan jumlah peserta kegiatan', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(750, 192, 'Mengurangi durasi program', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(751, 193, 'Perencanaan saja', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(752, 193, 'Implementasi saja', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(753, 193, 'Evaluasi saja', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(754, 193, 'Perencanaan, implementasi, pemantauan, dan evaluasi', 1, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(755, 194, 'Mengganti program lama', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(756, 194, 'Mengidentifikasi masalah yang ingin diatasi', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(757, 194, 'Menghitung pajak program', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(758, 194, 'Menyusun laporan tahunan', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(759, 195, 'Menyusun laporan keuangan', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(760, 195, 'Mengembangkan strategi dan roadmap perubahan', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(761, 195, 'Mengurangi jumlah kegiatan', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(762, 195, 'Menyederhanakan organisasi', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(763, 196, 'Mengalokasikan sumber daya secara efektif', 1, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(764, 196, 'Mengurangi jumlah stakeholder', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(765, 196, 'Menghapus aktivitas program', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(766, 196, 'Mengganti tujuan program', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(767, 197, 'Kerangka kerja pelaksanaan kegiatan', 1, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(768, 197, 'Alat audit keuangan', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(769, 197, 'Sistem manajemen SDM', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(770, 197, 'Sistem pemasaran program', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(771, 198, 'Manajemen organisasi', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(772, 198, 'Mitra kerja', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(773, 198, 'Penerima manfaat', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(774, 198, 'Semua pemangku kepentingan', 1, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(775, 199, 'Stakeholder', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(776, 199, 'Input', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(777, 199, 'Activity', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(778, 199, 'Semua benar', 1, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(779, 200, 'Outcome', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(780, 200, 'Input', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(781, 200, 'Impact', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(782, 200, 'Output', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(783, 201, 'Activity', 1, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(784, 201, 'Input', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(785, 201, 'Impact', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(786, 201, 'Outcome', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(787, 202, 'Outcome', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(788, 202, 'Output', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(789, 202, 'Impact', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(790, 202, 'Input', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(791, 203, 'Activity', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(792, 203, 'Outcome', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(793, 203, 'Impact', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(794, 203, 'Input', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(795, 204, 'Output', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(796, 204, 'Outcome', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(797, 204, 'Impact', 1, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(798, 204, 'Activity', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(799, 205, 'Orang yang menerima gaji dari program', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(800, 205, 'Pihak yang memiliki kepentingan atau terlibat dalam program', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(801, 205, 'Hanya pihak pemerintah', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(802, 205, 'Hanya penerima manfaat', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(803, 206, 'Forecasting', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(804, 206, 'Backcasting', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(805, 206, 'Benchmarking', 0, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(806, 206, 'Brainstorming', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(807, 207, 'Memulai dari kegiatan yang tersedia', 0, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(808, 207, 'Memulai dari sumber daya yang dimiliki', 0, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(809, 207, 'Memulai dari dampak yang diinginkan kemudian menelusuri langkah ke belakang', 1, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(810, 207, 'Memulai dari laporan evaluasi', 0, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(811, 208, 'Perusahaan', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(812, 208, 'Yayasan', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(813, 208, 'Pemerintah', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(814, 208, 'Organisasi', 1, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(815, 209, 'Benar', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(816, 209, 'Salah', 1, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(817, 210, 'Pelatihan Karyawan', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(818, 210, 'Perlindungan Data Konsumen', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(819, 210, 'Pelibatan dan Pengembangan Masyarakat', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(820, 210, 'Semua benar', 1, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(821, 211, 'Pemerintah', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(822, 211, 'Stakeholder', 1, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(823, 211, 'Penerima Manfaat', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(824, 211, 'Mitra Kerja', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(825, 212, 'Tanggung Jawab Sosial', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(826, 212, 'Isu Sosial', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(827, 212, 'Risiko', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(828, 212, 'Lingkup Pengaruh', 1, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(829, 213, 'Sustainability', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(830, 213, 'Sustainable Development', 1, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(831, 213, 'Creating Shared Value (CSV)', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(832, 213, 'Sustainable Development Goals (SDGs)', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(833, 214, 'Dampak Sosial dan Lingkungan setempat', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(834, 214, 'Dampak Negatif', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(835, 214, 'Risiko Organisasi', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(836, 214, 'Dampak dari keputusan dan aktivitas', 1, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(837, 215, 'Business Case', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(838, 215, 'Stakeholder Mapping', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(839, 215, 'Social Mapping', 1, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(840, 215, 'SDG Plan', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(841, 216, 'Masyarakat', 0, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(842, 216, 'Society', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(843, 216, 'Komunitas', 1, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(844, 216, 'Individu', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(845, 217, 'Benar', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(846, 217, 'Salah', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(847, 218, 'Pelibatan dan Pengembangan masyarakat adalah salah satu subyek inti tanggung jawab sosial', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(848, 218, 'Pelibatan dan Pengembangan Masyarakat = Tanggung Jawab', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(849, 218, 'Pelibatan dan Pengembangan Masyarakat', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(850, 218, 'Semua benar', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(851, 219, 'Kelompok', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(852, 219, 'Norma', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(853, 219, 'Komunitas', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(854, 219, 'Masyarakat', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(855, 220, 'Outcome', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(856, 220, 'Impact', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(857, 220, 'Output', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(858, 220, 'Input', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(859, 221, 'Peningkatan kondisi sosial, ekonomi, dan budaya', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(860, 221, 'Proses swadaya dimana masyarakat berinisiatif', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(861, 221, 'Semua benar', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(862, 221, 'Kolaborasi antara inisiatif masyarakat dan dukungan', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(863, 222, 'Perencanaan', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(864, 222, 'Pelaksanaan', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(865, 222, 'Monitoring', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(866, 222, 'Evaluasi', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(867, 223, 'Semua benar', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(868, 223, 'Pengorganisasian Masyarakat', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(869, 223, 'Pengembangan Jejaring', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(870, 223, 'Pengembangan Kapasitas', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(871, 224, 'Benar', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(872, 224, 'Salah', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(873, 225, 'Planet, People, Profit', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(874, 225, 'People, Peace, Partnership', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(875, 225, 'Planet, Partnership, Profit', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(876, 225, 'Program, Prosperity, Partnership', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(877, 226, 'Pengembangan Masyarakat sebagai Proses', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(878, 226, 'Pengembangan Masyarakat sebagai suatu Metode', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(879, 226, 'Pengembangan Masyarakat sebagai suatu Program', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(880, 226, 'Semua benar', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(881, 227, 'Pemberdayaan bertujuan membangun kemampuan masyarakat agar mandiri secara berkelanjutan melalui pelibatan aktif', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(882, 227, 'Masyarakat diminta melanjutkan tanpa ada arahan', 0, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(883, 227, 'Program dilanjutkan oleh masyarakat tertentu', 0, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(884, 227, 'Masyarakat menjalankan program sendiri yang berbeda', 0, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(885, 228, 'Perusahaan', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(886, 228, 'Yayasan', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(887, 228, 'Pemerintah', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(888, 228, 'Organisasi', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(889, 229, 'Benar', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(890, 229, 'Salah', 1, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(891, 230, 'Pelatihan Karyawan', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(892, 230, 'Perlindungan Data Konsumen', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(893, 230, 'Pelibatan dan Pengembangan Masyarakat', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(894, 230, 'Semua Benar', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(895, 231, 'Pemerintah', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(896, 231, 'Stakeholder', 1, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(897, 231, 'Penerima Manfaat', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(898, 231, 'Mitra Kerja', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(899, 232, 'Tanggung Jawab Sosial', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(900, 232, 'Isu Sosial', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(901, 232, 'Risiko', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(902, 232, 'Lingkup Pengaruh', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(903, 233, 'Sustainability', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(904, 233, 'Sustainable Development', 1, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(905, 233, 'Creating Shared Value (CSV)', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(906, 233, 'Sustainable Development Goals (SDGs)', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(907, 234, 'Dampak Sosial dan Lingkungan setempat', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(908, 234, 'Dampak Negatif', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(909, 234, 'Risiko Organisasi', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(910, 234, 'Dampak dari keputusan dan aktivitas', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(911, 235, 'Business Case', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(912, 235, 'Stakeholder Mapping', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(913, 235, 'Social Mapping', 1, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(914, 235, 'SDG Plan', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(915, 236, 'Masyarakat', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(916, 236, 'Society', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(917, 236, 'Komunitas', 1, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(918, 236, 'Individu', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(919, 237, 'Benar', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(920, 237, 'Salah', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(921, 238, 'Pelibatan dan Pengembangan masyarakat adalah salah satu subyek inti tanggung jawab sosial', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(922, 238, 'Pelibatan dan Pengembangan Masyarakat = Tanggung Jawab Sosial', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(923, 238, 'Pelibatan dan Pengembangan Masyarakat bukan tanggung jawab sosial', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(924, 238, 'Semua benar', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(925, 239, 'Kelompok', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(926, 239, 'Norma', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(927, 239, 'Komunitas', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(928, 239, 'Masyarakat', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(929, 240, 'Outcome', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(930, 240, 'Impact', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(931, 240, 'Output', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(932, 240, 'Input', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(933, 241, 'Peningkatan kondisi sosial, ekonomi, dan budaya setempat', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(934, 241, 'Proses swadaya dimana masyarakat berinisiatif dan berperan aktif untuk memperbaiki kehidupannya', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(935, 241, 'Semua benar', 1, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(936, 241, 'Kolaborasi antara inisiatif masyarakat dan dukungan pemerintah atau stakeholder lain', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(937, 242, 'Perencanaan', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(938, 242, 'Pelaksanaan', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(939, 242, 'Monitoring', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(940, 242, 'Evaluasi', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(941, 243, 'Semua benar', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(942, 243, 'Pengorganisasian Masyarakat', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(943, 243, 'Pengembangan Jejaring', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(944, 243, 'Pengembangan Kapasitas', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(945, 244, 'Benar', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(946, 244, 'Salah', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(947, 245, 'Planet, People, Profit', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(948, 245, 'People, Peace, Partnership', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(949, 245, 'Planet, Partnership, Profit', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(950, 245, 'Program, Prosperity, Partnership', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(951, 246, 'Pengembangan Masyarakat sebagai Proses', 0, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(952, 246, 'Pengembangan Masyarakat sebagai suatu Metode', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(953, 246, 'Pengembangan Masyarakat sebagai suatu Program', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(954, 246, 'Semua benar', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(955, 247, 'Pemberdayaan bertujuan membangun kemampuan masyarakat agar mandiri secara berkelanjutan melalui pelibatan aktif', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(956, 247, 'Masyarakat diminta melanjutkan tanpa ada arahan', 0, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(957, 247, 'Program dilanjutkan oleh masyarakat tertentu', 0, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(958, 247, 'Masyarakat menjalankan program sendiri yang berbeda', 0, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(959, 248, 'Fokus pada ekspansi global', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(960, 248, 'Menghasilkan keuntungan semata', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(961, 248, 'Memberikan dampak sosial dan lingkungan', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(962, 248, 'Mengurangi biaya operasional', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(963, 249, 'Program sosial perusahaan', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(964, 249, 'Strategi bisnis yag terpisah dari operasional', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(965, 249, 'Strategi bisnis yang mengintegrasikan isu sosial', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(966, 249, 'Aktivitas filantropi perusahaan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(967, 250, 'Filantropi berorientasi profit', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(968, 250, 'CSV tidak terkait bisnis', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(969, 250, 'Filantropi tidak terhubung dengan bisnis inti', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(970, 250, 'CSV hanya untuk CSR', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(971, 251, 'Meningkatkan profit semata', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(972, 251, 'Mitigasi risiko dan pengelolaan dampak', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(973, 251, 'Membuka pasar baru', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(974, 251, 'Mengganti strategi bisnis', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(975, 252, 'Meningkatkan donasi perusahaan', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(976, 252, 'Menghindari regulasi pemerintah', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(977, 252, 'Menciptakan nilai ekonomi dan sosial', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(978, 252, 'Mengurangi aktivitas bisnis', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(979, 253, 'Philip Kotler', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(980, 253, 'Michael Porter', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(981, 253, 'Peter Drucker', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(982, 253, 'Adam Smith', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(983, 254, 'Keuntungan semata', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(984, 254, 'Dampak sosial saja', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(985, 254, 'Manfaat relatif terhadap biaya', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(986, 254, 'Nilai saham perusahaan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(987, 255, 'Terpisah dari strategi bisnis', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(988, 255, 'Fokus pada donasi', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(989, 255, 'Menciptakan keunggulan kompetitif', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(990, 255, 'Tidak melibatkan stakeholder', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(991, 256, 'Filantropi sosial', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(992, 256, 'Reconceiving Products and Markets', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(993, 256, 'Risk Management', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(994, 256, 'Social Branding', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(995, 257, 'Operasional internal', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(996, 257, 'Inovasi produk dan pasar', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(997, 257, 'Penguatan regulasi', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(998, 257, 'Pengurangan pajak', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(999, 258, 'Ekspansi global', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1000, 258, 'Internal operasional perusahaan', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1001, 258, 'Kampanye sosial', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1002, 258, 'Branding perusahaan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1003, 259, 'Meningkatkan pajak perusahaan', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1004, 259, 'Mengembangkan komunitas lokal', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1005, 259, 'Mengurangi tenaga kerja', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1006, 259, 'Meningkatkan harga produk', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1007, 260, 'Donasi ke panti asuhan', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1008, 260, 'Program pelatihan internal', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1009, 260, 'Produk murah untuk masyarakat miskin', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1010, 260, 'Audit internal perusahaan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1011, 261, 'Inovasi produk baru', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1012, 261, 'Efisiensi energi dalam operasional', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1013, 261, 'Donasi pendidikan', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1014, 261, 'Kampanye sosial media', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1015, 262, 'Pembuatan produk baru', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1016, 262, 'Efisiensi biaya produksi', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1017, 262, 'Pengembangan koperasi masyarakat', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1018, 262, 'Branding perusahaan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1019, 263, 'Evaluasi hasil', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1020, 263, 'Monitoring', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1021, 263, 'Integrasi ke strategi bisnis', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1022, 263, 'Pelaporan', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1023, 264, 'Untuk memenuh regulasi', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1024, 264, 'Agar sesuai dengan kompetensi inti perusahaan', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1025, 264, 'Untuk meningkatkan biaya', 0, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1026, 264, 'Untuk promosi', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1027, 265, 'Hanya keuntungan sosial', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1028, 265, 'Hanya keuntungan finansial', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1029, 265, 'Nilai sosial dan bisnis', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1030, 265, 'Pengurangan tenaga kerja', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1031, 266, 'Biaya tinggi', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1032, 266, 'Kurangnya SDM', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1033, 266, 'Mengukur keterkaitan sosial dan finansial', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1034, 266, 'Regulasi pemerintah', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1035, 267, 'Meningkatkan donasi', 0, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1036, 267, 'Meningkatkan pajak', 0, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1037, 267, 'Menciptakan nilai bersama yang berkelanjutan', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1038, 267, 'Mengurangi produksi', 0, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(1039, 268, 'Fokus pada ekspansi global', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1040, 268, 'Menghasilkan keuntungan semata', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1041, 268, 'Memberikan dampak sosial dan lingkungan', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1042, 268, 'Mengurangi biaya operasional', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1043, 269, 'Program sosial perusahaan', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1044, 269, 'Strategi bisnis yang terpisah dari operasional', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1045, 269, 'Strategi bisnis yang mengintegrasikan isu sosial', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1046, 269, 'Aktivitas filantropi perusahaan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1047, 270, 'Filantropi berorientasi profit', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1048, 270, 'CSV tidak terkait bisnis', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1049, 270, 'Filantropi tidak terhubung dengan bisnis inti', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1050, 270, 'CSV hanya untuk CSR', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1051, 271, 'Meningkatkan profit semata', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1052, 271, 'Mitigasi risiko dan pengelolaan dampak', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1053, 271, 'Membuka pasar baru', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1054, 271, 'Mengganti strategi bisnis', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1055, 272, 'Meningkatkan donasi perusahaan', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1056, 272, 'Menghindari regulasi pemerintah', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1057, 272, 'Menciptakan nilai ekonomi dan sosial', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1058, 272, 'Mengurangi aktivitas bisnis', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1059, 273, 'Philip Kotler', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1060, 273, 'Michael Porter', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1061, 273, 'Peter Drucker', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1062, 273, 'Adam Smith', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1063, 274, 'Keuntungan semata', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1064, 274, 'Dampak sosial saja', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1065, 274, 'Manfaat relatif terhadap biaya', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1066, 274, 'Nilai saham perusahaan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1067, 275, 'Terpisah dari strategi bisnis', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1068, 275, 'Fokus pada donasi', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1069, 275, 'Menciptakan keunggulan kompetitif', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1070, 275, 'Tidak melibatkan stakeholder', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1071, 276, 'Filantropi sosial', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1072, 276, 'Reconceiving Products and Markets', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1073, 276, 'Risk Management', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1074, 276, 'Social Branding', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1075, 277, 'Operasional internal', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1076, 277, 'Inovasi produk dan pasar', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1077, 277, 'Penguatan regulasi', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1078, 277, 'Pengurangan pajak', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1079, 278, 'Ekspansi global', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1080, 278, 'Internal operasional perusahaan', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1081, 278, 'Kampanye sosial', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1082, 278, 'Branding perusahaan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1083, 279, 'Meningkatkan pajak perusahaan', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1084, 279, 'Mengembangkan komunitas lokal', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1085, 279, 'Mengurangi tenaga kerja', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1086, 279, 'Meningkatkan harga produk', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1087, 280, 'Donasi ke panti asuhan', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1088, 280, 'Program pelatihan internal', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1089, 280, 'Produk murah untuk masyarakat miskin', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1090, 280, 'Audit internal perusahaan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1091, 281, 'Inovasi produk baru', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1092, 281, 'Efisiensi energi dalam operasional', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1093, 281, 'Donasi pendidikan', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1094, 281, 'Kampanye sosial media', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1095, 282, 'Pembuatan produk baru', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1096, 282, 'Efisiensi biaya produksi', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1097, 282, 'Pengembangan koperasi masyarakat', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1098, 282, 'Branding perusahaan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1099, 283, 'Evaluasi hasil', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1100, 283, 'Monitoring', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1101, 283, 'Integrasi ke strategi bisnis', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1102, 283, 'Pelaporan', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1103, 284, 'Untuk memenuhi regulasi', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1104, 284, 'Agar sesuai dengan kompetensi inti perusahaan', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1105, 284, 'Untuk meningkatkan biaya', 0, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1106, 284, 'Untuk promosi', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1107, 285, 'Hanya keuntungan sosial', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1108, 285, 'Hanya keuntungan finansial', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1109, 285, 'Nilai sosial dan bisnis', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1110, 285, 'Pengurangan tenaga kerja', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1111, 286, 'Biaya tinggi', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1112, 286, 'Kurangnya SDM', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1113, 286, 'Mengukur keterkaitan sosial dan finansial', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1114, 286, 'Regulasi pemerintah', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1115, 287, 'Meningkatkan donasi', 0, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1116, 287, 'Meningkatkan pajak', 0, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1117, 287, 'Menciptakan nilai bersama yang berkelanjutan', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1118, 287, 'Mengurangi produksi', 0, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(1119, 288, 'Metode audit keuangan perusahaan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1120, 288, 'Alat ukur kepuasan masyarakat terhadap layanan secara sistematis', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1121, 288, 'Teknik pemasaran berbasis komunitas', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1122, 288, 'Strategi peningkatan profit perusahaan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1123, 289, 'Meningkatkan penjualan produk', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1124, 289, 'Mengetahui kepuasan karyawan', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1125, 289, 'Menilai keberhasilan dan kelemahan layanan/program', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1126, 289, 'Mengurangi biaya operasional', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1127, 290, 'Subjektif dan tidak terstruktur', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1128, 290, 'Kualitatif saja', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1129, 290, 'Kuantitatif saja', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1130, 290, 'Kuantitatif dan kualitatif', 1, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1131, 291, 'UU No. 13 Tahun 2003', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1132, 291, 'Permenpan RB No. 14 Tahun 2017', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1133, 291, 'PP No. 23 Tahun 2014', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1134, 291, 'ISO 9001', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1135, 292, 'Hanya pemerintah pusat', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1136, 292, 'Hanya perusahaan swasta', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1137, 292, 'Pemerintah, perusahaan, dan lembaga penelitian', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1138, 292, 'Hanya NGO', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1139, 293, 'Netralitas', 1, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1140, 293, 'Transparansi', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1141, 293, 'Partisipatif', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1142, 293, 'Akuntabilitas', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1143, 294, 'Keadilan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1144, 294, 'Netralitas', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1145, 294, 'Transparansi', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1146, 294, 'Berkesinambungan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1147, 295, 'Setiap bulan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1148, 295, 'Setiap 2 tahun', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1149, 295, 'Minimal 1 tahun sekali', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1150, 295, 'Tidak ada ketentuan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1151, 296, 'Skala Nominal', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1152, 296, 'Skala Likert', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1153, 296, 'Skala Rasio', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1154, 296, 'Skala Interval', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1155, 297, 'Analisis', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1156, 297, 'Pelaporan', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1157, 297, 'Inisiasi', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1158, 297, 'Evaluasi', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1159, 298, 'Inisiasi', 1, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1160, 298, 'Perencanaan', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1161, 298, 'Produksi', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1162, 298, 'Pelaksanaan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1163, 299, '5', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1164, 299, '7', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1165, 299, '9', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1166, 299, '12', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1167, 300, 'Profit perusahaan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1168, 300, 'Persyaratan layanan', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1169, 300, 'Harga saham', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1170, 300, 'Market share', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1171, 301, 'Kuesioner online', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1172, 301, 'Observasi sekunder', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37');
INSERT INTO `quiz_options` (`id`, `question_id`, `label`, `is_correct`, `sort_order`, `created_at`, `updated_at`) VALUES
(1173, 301, 'Wawancara mendalam', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1174, 301, 'Data sekunder', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1175, 302, 'X + Y', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1176, 302, 'X - Y', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1177, 302, 'Y - X', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1178, 302, 'Y / X', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1179, 303, 'Kinerja melebihi harapan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1180, 303, 'Kinerja sesuai harapan', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1181, 303, 'Kinerja di bawah harapan', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1182, 303, 'Tidak dapat disimpulkan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1183, 304, 'Kepentingan rendah, kinerja tinggi', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1184, 304, 'Kepentingan tinggi, kinerja rendah', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1185, 304, 'Kepentingan rendah, kinerja rendah', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1186, 304, 'Kepentingan tinggi, kinerja tinggi', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1187, 305, 'Menghitung laba perusahaan', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1188, 305, 'Menentukan strategi pemasaran', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1189, 305, 'Menggambarkan mutu layanan secara keseluruhan', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1190, 305, 'Menilai kinerja karyawan', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1191, 306, 'Menguji hubungan antar variabel', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1192, 306, 'Mendeskripsikan satu variabel', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1193, 306, 'Membuat strategi bisnis', 0, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1194, 306, 'Menghitung ROI', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1195, 307, 'Meningkatkan pajak', 0, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1196, 307, 'Mengurangi jumlah karyawan', 0, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1197, 307, 'Mendukung pengambilan keputusan berbasis data', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1198, 307, 'Mengurangi kebutuhan stakeholder', 0, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(1199, 308, 'Metode audit keuangan perusahaan', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1200, 308, 'Alat ukur kepuasan masyarakat terhadap layanan secara sistematis', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1201, 308, 'Teknik pemasaran berbasis komunitas', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1202, 308, 'Strategi peningkatan profit perusahaan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1203, 309, 'Meningkatkan penjualan produk', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1204, 309, 'Mengetahui kepuasan karyawan', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1205, 309, 'Menilai keberhasilan dan kelemahan layanan/program', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1206, 309, 'Mengurangi biaya operasional', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1207, 310, 'Subjektif dan tidak terstruktur', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1208, 310, 'Kualitatif saja', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1209, 310, 'Kuantitatif saja', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1210, 310, 'Kuantitatif dan kualitatif', 1, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1211, 311, 'UU No. 13 Tahun 2003', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1212, 311, 'Permenpan RB No. 14 Tahun 2017', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1213, 311, 'PP No. 23 Tahun 2014', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1214, 311, 'ISO 9001', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1215, 312, 'Hanya pemerintah pusat', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1216, 312, 'Hanya perusahaan swasta', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1217, 312, 'Pemerintah, perusahaan, dan lembaga penelitian', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1218, 312, 'Hanya NGO', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1219, 313, 'Netralitas', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1220, 313, 'Transparansi', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1221, 313, 'Partisipatif', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1222, 313, 'Akuntabilitas', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1223, 314, 'Keadilan', 1, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1224, 314, 'Netralitas', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1225, 314, 'Transparansi', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1226, 314, 'Berkesinambungan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1227, 315, 'Setiap bulan', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1228, 315, 'Setiap 2 tahun', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1229, 315, 'Minimal 1 tahun sekali', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1230, 315, 'Tidak ada ketentuan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1231, 316, 'Skala Nominal', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1232, 316, 'Skala Likert', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1233, 316, 'Skala Rasio', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1234, 316, 'Skala Interval', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1235, 317, 'Analisis', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1236, 317, 'Pelaporan', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1237, 317, 'Inisiasi', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1238, 317, 'Evaluasi', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1239, 318, 'Inisiasi', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1240, 318, 'Perencanaan', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1241, 318, 'Produksi', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1242, 318, 'Pelaksanaan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1243, 319, '5', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1244, 319, '7', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1245, 319, '9', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1246, 319, '12', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1247, 320, 'Profit perusahaan', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1248, 320, 'Persyaratan layanan', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1249, 320, 'Harga saham', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1250, 320, 'Market share', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1251, 321, 'Kuesioner online', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1252, 321, 'Observasi sekunder', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1253, 321, 'Wawancara mendalam', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1254, 321, 'Data sekunder', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1255, 322, 'X + Y', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1256, 322, 'X - Y', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1257, 322, 'Y - X', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1258, 322, 'Y / X', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1259, 323, 'Kinerja melebihi harapan', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1260, 323, 'Kinerja sesuai harapan', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1261, 323, 'Kinerja di bawah harapan', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1262, 323, 'Tidak dapat disimpulkan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1263, 324, 'Kepentingan rendah, kinerja tinggi', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1264, 324, 'Kepentingan tinggi, kinerja rendah', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1265, 324, 'Kepentingan rendah, kinerja rendah', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1266, 324, 'Kepentingan tinggi, kinerja tinggi', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1267, 325, 'Menghitung laba perusahaan', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1268, 325, 'Menentukan strategi pemasaran', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1269, 325, 'Menggambarkan mutu layanan secara keseluruhan', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1270, 325, 'Menilai kinerja karyawan', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1271, 326, 'Menguji hubungan antar variabel', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1272, 326, 'Mendeskripsikan satu variabel', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1273, 326, 'Membuat strategi bisnis', 0, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1274, 326, 'Menghitung ROI', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1275, 327, 'Meningkatkan pajak', 0, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1276, 327, 'Mengurangi jumlah karyawan', 0, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1277, 327, 'Mendukung pengambilan keputusan berbasis data', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1278, 327, 'Mengurangi kebutuhan stakeholder', 0, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(1279, 328, 'Menghitung laba perusahaan', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1280, 328, 'Mengukur nilai sosial secara kualitatif saja', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1281, 328, 'Mengukur, mengelola, dan mengkomunikasikan dampak dalam bentuk nilai', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1282, 328, 'Menentukan strategi pemasaran', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1283, 329, 'Nilai finansial perusahaan', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1284, 329, 'Nilai yang dirasakan stakeholder akibat perubahan', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1285, 329, 'Nilai saham perusahaan', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1286, 329, 'Nilai aset tetap', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1287, 330, 'Menggunakan teknologi digital', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1288, 330, 'Melibatkan stakeholder dalam proses identifikasi dampak', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1289, 330, 'Berbasis data keuangan', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1290, 330, 'Menggunakan software khusus', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1291, 331, 'Memprediksi dampak masa depan', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1292, 331, 'Mengukur dampak sebelum program', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1293, 331, 'Mengukur dampak setelah program berjalan', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1294, 331, 'Menentukan stakeholder', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1295, 332, 'Setelah program selesai', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1296, 332, 'Saat audit', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1297, 332, 'Sebelum program berjalan', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1298, 332, 'Saat pelaporan', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1299, 333, 'Maksimalkan keuntungan', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1300, 333, 'Fokus pada aktivitas', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1301, 333, 'Tidak melakukan klaim berlebihan', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1302, 333, 'Mengurangi stakeholder', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1303, 334, '4', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1304, 334, '5', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1305, 334, '6', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1306, 334, '7', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1307, 335, 'Menghitung impact', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1308, 335, 'Menentukan indikator', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1309, 335, 'Menetapkan ruang lingkup dan stakeholder', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1310, 335, 'Menghitung SROI', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1311, 336, 'Hanya investor', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1312, 336, 'Pihak yang memengaruhi atau dipengaruhi program', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1313, 336, 'Hanya penerima manfaat', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1314, 336, 'Hanya pemerintah', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1315, 337, 'Dampak jangka panjang', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1316, 337, 'Perubahan sosial', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1317, 337, 'Hasil langsung dari aktivitas', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1318, 337, 'Investasi awal', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1319, 338, 'Aktivitas program', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1320, 338, 'Perubahan yang terjadi akibat program', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1321, 338, 'Jumlah biaya', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1322, 338, 'Laporan keuangan', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1323, 339, 'Output program', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1324, 339, 'Outcome tanpa penyesuaian', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1325, 339, 'Outcome yang telah dimonetisasi dan disesuaikan', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1326, 339, 'Jumlah stakeholder', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1327, 340, 'Menghitung biaya operasional', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1328, 340, 'Menentukan stakeholder', 0, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1329, 340, 'Mengonversi outcome menjadi nilai moneter', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1330, 340, 'Menghitung pajak', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1331, 341, 'Audit keuangan', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1332, 341, 'Wawancara dan FGD', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1333, 341, 'Analisis SWOT', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1334, 341, 'Benchmarking', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1335, 342, 'Dampak negatif program', 0, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1336, 342, 'Dampak yang terjadi tanpa intervensi program', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1337, 342, 'Dampak dari pihak lain', 0, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1338, 342, 'Penurunan dampak', 0, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(1339, 343, 'Dampak yang berpindah', 0, 1, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1340, 343, 'Dampak yang menurun', 0, 2, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1341, 343, 'Kontribusi pihak lain terhadap outcome', 1, 3, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1342, 343, 'Dampak total', 0, 4, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1343, 344, 'Dampak yang berpindah lokasi', 0, 1, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1344, 344, 'Penurunan dampak dari waktu ke waktu', 1, 2, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1345, 344, 'Dampak tanpa program', 0, 3, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1346, 344, 'Dampak eksternal', 0, 4, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1347, 345, 'Meningkatkan nilai SROI', 0, 1, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1348, 345, 'Menghindari klaim dampak berlebihan', 1, 2, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1349, 345, 'Mempercepat perhitungan', 0, 3, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1350, 345, 'Menambah stakeholder', 0, 4, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1351, 346, 'Total biaya / total manfaat', 0, 1, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1352, 346, 'Total manfaat / total investasi', 1, 2, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1353, 346, 'Output / outcome', 0, 3, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1354, 346, 'Impact / stakeholder', 0, 4, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1355, 347, 'Menyimpan data internal', 0, 1, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1356, 347, 'Memenuhi regulasi saja', 0, 2, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1357, 347, 'Mengkomunikasikan hasil secara transparan dan mendukung pengambilan keputusan', 1, 3, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1358, 347, 'Mengurangi biaya', 0, 4, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(1359, 348, 'Menghitung laba perusahaan', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1360, 348, 'Mengukur nilai sosial secara kualitatif saja', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1361, 348, 'Mengukur, mengelola, dan mengkomunikasikan dampak dalam bentuk nilai', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1362, 348, 'Menentukan strategi pemasaran', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1363, 349, 'Nilai finansial perusahaan', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1364, 349, 'Nilai yang dirasakan stakeholder akibat perubahan', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1365, 349, 'Nilai saham perusahaan', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1366, 349, 'Nilai aset tetap', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1367, 350, 'Menggunakan teknologi digital', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1368, 350, 'Melibatkan stakeholder dalam proses identifikasi dampak', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1369, 350, 'Berbasis data keuangan', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1370, 350, 'Menggunakan software khusus', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1371, 351, 'Memprediksi dampak masa depan', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1372, 351, 'Mengukur dampak sebelum program', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1373, 351, 'Mengukur dampak setelah program berjalan', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1374, 351, 'Menentukan stakeholder', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1375, 352, 'Setelah program selesai', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1376, 352, 'Saat audit', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1377, 352, 'Sebelum program berjalan', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1378, 352, 'Saat pelaporan', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1379, 353, 'Maksimalkan keuntungan', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1380, 353, 'Fokus pada aktivitas', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1381, 353, 'Tidak melakukan klaim berlebihan', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1382, 353, 'Mengurangi stakeholder', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1383, 354, '4', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1384, 354, '5', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1385, 354, '6', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1386, 354, '7', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1387, 355, 'Menghitung impact', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1388, 355, 'Menentukan indikator', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1389, 355, 'Menetapkan ruang lingkup dan stakeholder', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1390, 355, 'Menghitung SROI', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1391, 356, 'Hanya investor', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1392, 356, 'Pihak yang memengaruhi atau dipengaruhi program', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1393, 356, 'Hanya penerima manfaat', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1394, 356, 'Hanya pemerintah', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1395, 357, 'Dampak jangka panjang', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1396, 357, 'Perubahan sosial', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1397, 357, 'Hasil langsung dari aktivitas', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1398, 357, 'Investasi awal', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1399, 358, 'Aktivitas program', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1400, 358, 'Perubahan yang terjadi akibat program', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1401, 358, 'Jumlah biaya', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1402, 358, 'Laporan keuangan', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1403, 359, 'Output program', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1404, 359, 'Outcome tanpa penyesuaian', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1405, 359, 'Outcome yang telah dimonetisasi dan disesuaikan', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1406, 359, 'Jumlah stakeholder', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1407, 360, 'Menghitung biaya operasional', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1408, 360, 'Menentukan stakeholder', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1409, 360, 'Mengonversi outcome menjadi nilai moneter', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1410, 360, 'Menghitung pajak', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1411, 361, 'Audit keuangan', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1412, 361, 'Wawancara dan FGD', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1413, 361, 'Analisis SWOT', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1414, 361, 'Benchmarking', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1415, 362, 'Dampak negatif program', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1416, 362, 'Dampak yang terjadi tanpa intervensi program', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1417, 362, 'Dampak dari pihak lain', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1418, 362, 'Penurunan dampak', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1419, 363, 'Dampak yang berpindah', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1420, 363, 'Dampak yang menurun', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1421, 363, 'Kontribusi pihak lain terhadap outcome', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1422, 363, 'Dampak total', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1423, 364, 'Dampak yang berpindah lokasi', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1424, 364, 'Penurunan dampak dari waktu ke waktu', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1425, 364, 'Dampak tanpa program', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1426, 364, 'Dampak eksternal', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1427, 365, 'Meningkatkan nilai SROI', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1428, 365, 'Menghindari klaim dampak berlebihan', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1429, 365, 'Mempercepat perhitungan', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1430, 365, 'Menambah stakeholder', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1431, 366, 'Total biaya / total manfaat', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1432, 366, 'Total manfaat / total investasi', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1433, 366, 'Output / outcome', 0, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1434, 366, 'Impact / stakeholder', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1435, 367, 'Menyimpan data internal', 0, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1436, 367, 'Memenuhi regulasi saja', 0, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1437, 367, 'Mengkomunikasikan hasil secara transparan dan mendukung pengambilan keputusan', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1438, 367, 'Mengurangi biaya', 0, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(1439, 368, 'Proses audit keuangan perusahaan', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1440, 368, 'Proses memahami kondisi sosial masyarakat secara menyeluruh', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1441, 368, 'Proses pemasaran produk', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1442, 368, 'Proses rekrutmen tenaga kerja', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1443, 369, 'Meningkatkan penjualan produk', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1444, 369, 'Mengurangi biaya operasional', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1445, 369, 'Menjadi dasar penyusunan program yang tepat sasaran', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1446, 369, 'Meningkatkan jumlah karyawan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1447, 370, 'Menghindari pajak', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1448, 370, 'Mitigasi risiko sosial dan menjaga SLO', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1449, 370, 'Meningkatkan produksi', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1450, 370, 'Mengurangi kompetitor', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1451, 371, 'Setelah program selesai', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1452, 371, 'Saat konflik terjadi', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1453, 371, 'Sebelum perencanaan program', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1454, 371, 'Saat audit keuangan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1455, 372, 'Identifikasi stakeholder', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1456, 372, 'Menyusun laporan keuangan', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1457, 372, 'Analisis kerentanan', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1458, 372, 'Penyusunan rekomendasi program', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1459, 373, 'Seluruh negara', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1460, 373, 'Wilayah Ring 1 atau terdampak langsung', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1461, 373, 'Kantor pusat', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1462, 373, 'Area internasional', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1463, 374, 'Analisis data', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1464, 374, 'Studi data sekunder', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1465, 374, 'Penyusunan rekomendasi', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1466, 374, 'Evaluasi program', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1467, 375, 'Audit laporan', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1468, 375, 'Wawancara dan observasi lapangan', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1469, 375, 'Analisis SWOT', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1470, 375, 'Penyusunan anggaran', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1471, 376, 'Pendidikan masyarakat', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1472, 376, 'Struktur organisasi', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1473, 376, 'Letak wilayah dan akses jalan', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1474, 376, 'Pendapatan masyarakat', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1475, 377, 'Politik, ekonomi, sosial, budaya', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1476, 377, 'Nature, Economy, Wellbeing, Society', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1477, 377, 'Internal dan eksternal', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1478, 377, 'SWOT', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1479, 378, 'Menghitung keuntungan', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1480, 378, 'Menentukan waktu program yang tepat', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1481, 378, 'Menyusun laporan keuangan', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1482, 378, 'Mengukur kepuasan pelanggan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1483, 379, 'Pihak yang tidak terlibat program', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1484, 379, 'Pihak yang mempengaruhi atau terdampak', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1485, 379, 'Hanya pemerintah', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1486, 379, 'Hanya perusahaan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1487, 380, '3 unsur', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1488, 380, '4 unsur', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1489, 380, '5 unsur', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1490, 380, '6 unsur', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1491, 381, 'Pengaruh rendah, kepentingan rendah', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1492, 381, 'Pengaruh tinggi, kepentingan tinggi', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1493, 381, 'Pengaruh rendah, kepentingan tinggi', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1494, 381, 'Tidak relevan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1495, 382, 'Kolaborasi kuat', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1496, 382, 'Komunikasi lancar', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1497, 382, 'Potensi konflik', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1498, 382, 'Dukungan penuh', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1499, 383, 'Menilai keuntungan perusahaan', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1500, 383, 'Melihat kekurangan masyarakat', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1501, 383, 'Mengidentifikasi aset dan potensi masyarakat', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1502, 383, 'Mengurangi tenaga kerja', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1503, 384, 'Human capital', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1504, 384, 'Natural Capital', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1505, 384, 'Political Capital', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1506, 384, 'Financial Capital', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1507, 385, 'Laporan keuangan', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1508, 385, 'Persepsi dan kekhawatiran stakeholder', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1509, 385, 'Struktur organisasi', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1510, 385, 'Target penjualan', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1511, 386, 'Sumber daya alam', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1512, 386, 'Pendidikan tinggi', 0, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1513, 386, 'Hambatan terhadap layanan dan informasi', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1514, 386, 'Pendapatan tinggi', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1515, 387, 'Keinginan perusahaan saja', 0, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1516, 387, 'Urgensi, aset, dan potensi dampak', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1517, 387, 'Jumlah karyawan', 0, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1518, 387, 'Lokasi kantor', 0, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(1519, 388, 'Proses audit keuangan perusahaan', 0, 1, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1520, 388, 'Proses memahami kondisi sosial masyarakat secara menyeluruh', 1, 2, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1521, 388, 'Proses pemasaran produk', 0, 3, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1522, 388, 'Proses rekrutmen tenaga kerja', 0, 4, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1523, 389, 'Meningkatkan penjualan produk', 0, 1, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1524, 389, 'Mengurangi biaya operasional', 0, 2, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1525, 389, 'Menjadi dasar penyusunan program yang tepat sasaran', 1, 3, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1526, 389, 'Meningkatkan jumlah karyawan', 0, 4, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1527, 390, 'Menghindari pajak', 0, 1, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1528, 390, 'Mitigasi risiko sosial dan menjaga SLO', 1, 2, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1529, 390, 'Meningkatkan produksi', 0, 3, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1530, 390, 'Mengurangi kompetitor', 0, 4, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1531, 391, 'Setelah program selesai', 0, 1, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1532, 391, 'Saat konflik terjadi', 0, 2, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1533, 391, 'Sebelum perencanaan program', 1, 3, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1534, 391, 'Saat audit keuangan', 0, 4, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(1535, 392, 'Identifikasi stakeholder', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1536, 392, 'Menyusun laporan keuangan', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1537, 392, 'Analisis kerentanan', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1538, 392, 'Penyusunan rekomendasi program', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1539, 393, 'Seluruh negara', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1540, 393, 'Wilayah Ring 1 atau terdampak langsung', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1541, 393, 'Kantor pusat', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1542, 393, 'Area internasional', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1543, 394, 'Analisis data', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1544, 394, 'Studi data sekunder', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1545, 394, 'Penyusunan rekomendasi', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1546, 394, 'Evaluasi program', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1547, 395, 'Audit laporan', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1548, 395, 'Wawancara dan observasi lapangan', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1549, 395, 'Analisis SWOT', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1550, 395, 'Penyusunan anggaran', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1551, 396, 'Pendidikan masyarakat', 1, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1552, 396, 'Struktur organisasi', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1553, 396, 'Letak wilayah dan akses jalan', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1554, 396, 'Pendapatan masyarakat', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1555, 397, 'Politik, ekonomi, sosial, budaya', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1556, 397, 'Nature, Economy, Wellbeing, Society', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1557, 397, 'Internal dan eksternal', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1558, 397, 'SWOT', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1559, 398, 'Menghitung keuntungan', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1560, 398, 'Menentukan waktu program yang tepat', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1561, 398, 'Menyusun laporan keuangan', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1562, 398, 'Mengukur kepuasan pelanggan', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1563, 399, 'Pihak yang tidak terlibat program', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1564, 399, 'Pihak yang mempengaruhi atau terdampak', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1565, 399, 'Hanya pemerintah', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1566, 399, 'Hanya perusahaan', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1567, 400, '3 unsur', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1568, 400, '4 unsur', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1569, 400, '5 unsur', 1, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1570, 400, '6 unsur', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1571, 401, 'Pengaruh rendah, kepentingan rendah', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1572, 401, 'Pengaruh tinggi, kepentingan tinggi', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1573, 401, 'Pengaruh rendah, kepentingan tinggi', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1574, 401, 'Tidak relevan', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1575, 402, 'Kolaborasi kuat', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1576, 402, 'Komunikasi lancar', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1577, 402, 'Potensi konflik', 1, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1578, 402, 'Dukungan penuh', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1579, 403, 'Menilai keuntungan perusahaan', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1580, 403, 'Melihat kekurangan masyarakat', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1581, 403, 'Mengidentifikasi aset dan potensi masyarakat', 1, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1582, 403, 'Mengurangi tenaga kerja', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1583, 404, 'Human capital', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1584, 404, 'Natural Capital', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1585, 404, 'Political Capital', 1, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1586, 404, 'Financial Capital', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1587, 405, 'Laporan keuangan', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1588, 405, 'Persepsi dan kekhawatiran stakeholder', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1589, 405, 'Struktur organisasi', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1590, 405, 'Target penjualan', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1591, 406, 'Sumber daya alam', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1592, 406, 'Pendidikan tinggi', 0, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1593, 406, 'Hambatan terhadap layanan dan informasi', 1, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1594, 406, 'Pendapatan tinggi', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1595, 407, 'Keinginan perusahaan saja', 0, 1, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1596, 407, 'Urgensi, aset, dan potensi dampak', 1, 2, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1597, 407, 'Jumlah karyawan', 0, 3, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1598, 407, 'Lokasi kantor', 0, 4, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(1679, 428, 'Menyusun laporan kegiatan tahunan', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1680, 428, 'Membuat kegiatan lebih banyak', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1681, 428, 'Menyusun perencanaan program yang logis, sistematis, dan terukur', 1, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1682, 428, 'Mengurangi jumlah stakeholder', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1683, 429, 'Evaluasi akhir saja', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1684, 429, 'Perencanaan program dan proyek', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1685, 429, 'Penyusunan laporan keuangan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1686, 429, 'Dokumentasi kegiatan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1687, 430, 'Program terlalu sederhana', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1688, 430, 'Program tidak memiliki anggaran', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1689, 430, 'Program tidak menjawab akar masalah', 1, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1690, 430, 'Program terlalu banyak stakeholder', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1691, 431, 'Anggaran dan laporan', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1692, 431, 'Tujuan, outcome, output, aktivitas, dan input', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1693, 431, 'Media dan promosi', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1694, 431, 'Dokumentasi dan publikasi', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1695, 432, 'Tahapan implementasi', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1696, 432, 'Tahapan analisis', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1697, 432, 'Tahapan evaluasi', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1698, 432, 'Tahapan monitoring', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1699, 433, 'Analisis biaya', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1700, 433, 'Analisis stakeholder', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1701, 433, 'Analisis laporan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1702, 433, 'Analisis promosi', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1703, 434, 'Menentukan jumlah anggaran program', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1704, 434, 'Mengidentifikasi pihak-pihak yang terlibat atau terdampak program', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1705, 434, 'Menentukan jadwal kegiatan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1706, 434, 'Menentukan metode pelaporan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1707, 435, 'Menyusun proposal kegiatan', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1708, 435, 'Mengidentifikasi akar permasalahan yang ingin diselesaikan program', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1709, 435, 'Menyusun laporan keuangan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1710, 435, 'Menentukan jumlah peserta', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1711, 436, 'Mengubah masalah menjadi tujuan yang ingin dicapai', 1, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1712, 436, 'Menyusun laporan kegiatan', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1713, 436, 'Menghitung biaya proyek', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1714, 436, 'Menentukan metode pelatihan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1715, 437, 'Analisis strategi', 1, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1716, 437, 'Analisis laporan', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1717, 437, 'Analisis media', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1718, 437, 'Analisis keuangan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1719, 438, 'Menentukan strategi komunikasi', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1720, 438, 'Memilih alternatif solusi terbaik untuk mencapai tujuan', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1721, 438, 'Mengatur anggaran proyek', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1722, 438, 'Menyusun laporan kegiatan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1723, 439, 'Laporan keuangan program', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1724, 439, 'Matriks kerangka logis (Logical Framework Matrix)', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1725, 439, 'Dokumentasi kegiatan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1726, 439, 'Proposal sponsor', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1727, 440, 'Menentukan biaya program', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1728, 440, 'Mengukur keberhasilan pencapaian tujuan program', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1729, 440, 'Menyusun jadwal kegiatan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1730, 440, 'Menentukan lokasi kegiatan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1731, 441, 'Umum dan fleksibel', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1732, 441, 'Subjektif', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1733, 441, 'Terukur dan dapat diverifikasi', 1, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1734, 441, 'Rahasia', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1735, 442, 'Menentukan anggaran program', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1736, 442, 'Membuktikan bahwa indikator benar-benar tercapai', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1737, 442, 'Menentukan jumlah peserta', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1738, 442, 'Mengatur jadwal kegiatan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1739, 443, 'Anggaran yang tersedia', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1740, 443, 'Faktor eksternal yang dapat mempengaruhi keberhasilan program', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1741, 443, 'Jumlah kegiatan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1742, 443, 'Target peserta', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1743, 444, 'Program memiliki dokumentasi lengkap', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1744, 444, 'Program memiliki alur pencapaian yang jelas', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1745, 444, 'Program memiliki banyak kegiatan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1746, 444, 'Program memiliki laporan panjang', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1747, 445, 'Sumber daya dan biaya yang dibutuhkan', 1, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1748, 445, 'Jumlah laporan kegiatan', 0, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1749, 445, 'Banyaknya kegiatan pelatihan', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1750, 445, 'Jumlah proposal yang dibuat', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1751, 446, 'Program lebih fleksibel tanpa arah', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1752, 446, 'Program dirancang berbasis logika dan sistematis', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1753, 446, 'Program tidak memerlukan evaluasi', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1754, 446, 'Program hanya fokus pada kegiatan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1755, 447, 'Mudah dibuktikan', 0, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1756, 447, 'Sulit diukur dan diverifikasi', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1757, 447, 'Lebih cepat tercapai', 0, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1758, 447, 'Lebih banyak kegiatan dilakukan', 0, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(1759, 448, 'Menyusun laporan kegiatan tahunan', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1760, 448, 'Membuat kegiatan lebih banyak', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1761, 448, 'Menyusun perencanaan program yang logis, sistematis, dan terukur', 1, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1762, 448, 'Mengurangi jumlah stakeholder', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1763, 449, 'Evaluasi akhir saja', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1764, 449, 'Perencanaan program dan proyek', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1765, 449, 'Penyusunan laporan keuangan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1766, 449, 'Dokumentasi kegiatan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1767, 450, 'Program terlalu sederhana', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1768, 450, 'Program tidak memiliki anggaran', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1769, 450, 'Program tidak menjawab akar masalah', 1, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1770, 450, 'Program terlalu banyak stakeholder', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1771, 451, 'Anggaran dan laporan', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1772, 451, 'Tujuan, outcome, output, aktivitas, dan input', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1773, 451, 'Media dan promosi', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1774, 451, 'Dokumentasi dan publikasi', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1775, 452, 'Tahapan implementasi', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1776, 452, 'Tahapan analisis', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1777, 452, 'Tahapan evaluasi', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1778, 452, 'Tahapan monitoring', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1779, 453, 'Analisis biaya', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1780, 453, 'Analisis stakeholder', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1781, 453, 'Analisis laporan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1782, 453, 'Analisis promosi', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1783, 454, 'Menentukan jumlah anggaran program', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1784, 454, 'Mengidentifikasi pihak-pihak yang terlibat atau terdampak program', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1785, 454, 'Menentukan jadwal kegiatan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1786, 454, 'Menentukan metode pelaporan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1787, 455, 'Menyusun proposal kegiatan', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1788, 455, 'Mengidentifikasi akar permasalahan yang ingin diselesaikan program', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1789, 455, 'Menyusun laporan keuangan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1790, 455, 'Menentukan jumlah peserta', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1791, 456, 'Mengubah masalah menjadi tujuan yang ingin dicapai', 1, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1792, 456, 'Menyusun laporan kegiatan', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1793, 456, 'Menghitung biaya proyek', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1794, 456, 'Menentukan metode pelatihan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1795, 457, 'Analisis strategi', 1, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1796, 457, 'Analisis laporan', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1797, 457, 'Analisis media', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1798, 457, 'Analisis keuangan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1799, 458, 'Menentukan strategi komunikasi', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55');
INSERT INTO `quiz_options` (`id`, `question_id`, `label`, `is_correct`, `sort_order`, `created_at`, `updated_at`) VALUES
(1800, 458, 'Memilih alternatif solusi terbaik untuk mencapai tujuan', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1801, 458, 'Mengatur anggaran proyek', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1802, 458, 'Menyusun laporan kegiatan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1803, 459, 'Laporan keuangan program', 1, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1804, 459, 'Matriks kerangka logis (Logical Framework Matrix)', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1805, 459, 'Dokumentasi kegiatan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1806, 459, 'Proposal sponsor', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1807, 460, 'Menentukan biaya program', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1808, 460, 'Mengukur keberhasilan pencapaian tujuan program', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1809, 460, 'Menyusun jadwal kegiatan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1810, 460, 'Menentukan lokasi kegiatan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1811, 461, 'Umum dan fleksibel', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1812, 461, 'Subjektif', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1813, 461, 'Terukur dan dapat diverifikasi', 1, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1814, 461, 'Rahasia', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1815, 462, 'Menentukan anggaran program', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1816, 462, 'Membuktikan bahwa indikator benar-benar tercapai', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1817, 462, 'Menentukan jumlah peserta', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1818, 462, 'Mengatur jadwal kegiatan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1819, 463, 'Anggaran yang tersedia', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1820, 463, 'Faktor eksternal yang dapat mempengaruhi keberhasilan program', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1821, 463, 'Jumlah kegiatan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1822, 463, 'Target peserta', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1823, 464, 'Program memiliki dokumentasi lengkap', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1824, 464, 'Program memiliki alur pencapaian yang jelas', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1825, 464, 'Program memiliki banyak kegiatan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1826, 464, 'Program memiliki laporan panjang', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1827, 465, 'Sumber daya dan biaya yang dibutuhkan', 1, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1828, 465, 'Jumlah laporan kegiatan', 0, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1829, 465, 'Banyaknya kegiatan pelatihan', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1830, 465, 'Jumlah proposal yang dibuat', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1831, 466, 'Program lebih fleksibel tanpa arah', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1832, 466, 'Program dirancang berbasis logika dan sistematis', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1833, 466, 'Program tidak memerlukan evaluasi', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1834, 466, 'Program hanya fokus pada kegiatan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1835, 467, 'Mudah dibuktikan', 0, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1836, 467, 'Sulit diukur dan diverifikasi', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1837, 467, 'Lebih cepat tercapai', 0, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(1838, 467, 'Lebih banyak kegiatan dilakukan', 0, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_questions`
--

CREATE TABLE `quiz_questions` (
  `id` bigint UNSIGNED NOT NULL,
  `quiz_id` bigint UNSIGNED NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `points` int NOT NULL DEFAULT '1',
  `sort_order` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz_questions`
--

INSERT INTO `quiz_questions` (`id`, `quiz_id`, `question`, `points`, `sort_order`, `created_at`, `updated_at`) VALUES
(56, 10, 'Tantangan global yang mendorong pentingnya pemberdayaan masyarakat adalah ...', 1, 1, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(57, 10, 'Keberlanjutan tidak hanya berbicara tentang lingkungan, tetapi juga tentang ...', 1, 2, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(58, 10, 'Dalam konsep 3P, “People” merepresentasikan …', 1, 3, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(59, 10, 'Pilar “Planet” dalam pembangunan berkelanjutan menekankan pada …', 1, 4, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(60, 10, 'Pilar “Profit” dalam konteks keberlanjutan berkaitan dengan …', 1, 5, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(61, 10, 'Social License to Operate dapat diperoleh organisasi/perusahaan melalui …', 1, 6, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(62, 10, 'Dalam pemberdayaan masyarakat, masyarakat diposisikan sebagai …', 1, 7, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(63, 10, 'Salah satu manfaat utama pemberdayaan masyarakat adalah …', 1, 8, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(64, 10, 'Pergeseran paradigma pembangunan saat ini bergerak dari …', 1, 9, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(65, 10, 'Dalam perspektif CSR/TJSL, pemberdayaan masyarakat berperan dalam …', 1, 10, '2026-02-06 04:04:05', '2026-02-06 04:04:05'),
(168, 15, 'Apa yang dimaksud dengan Theory of Change (ToC)?', 1, 1, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(169, 15, 'Theory of Change digunakan untuk membantu memahami hubungan antara:', 1, 2, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(170, 15, 'Theory of Change menggunakan pendekatan analisis yang berfokus pada:', 1, 3, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(171, 15, 'Theory of Change dapat digunakan pada berbagai jenis intervensi berikut, kecuali:', 1, 4, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(172, 15, 'Salah satu tujuan utama penggunaan ToC adalah:', 1, 5, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(173, 15, 'Theory of Change dapat digunakan dalam tahapan berikut:', 1, 6, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(174, 15, 'Pada tahap perencanaan, ToC dapat membantu organisasi untuk:', 1, 7, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(175, 15, 'Dalam perencanaan program, ToC membantu organisasi untuk:', 1, 8, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(176, 15, 'Salah satu manfaat ToC dalam perencanaan program adalah membantu:', 1, 9, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(177, 15, 'Dalam tahap implementasi, ToC berfungsi sebagai:', 1, 10, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(178, 15, 'ToC dapat digunakan sebagai alat komunikasi kepada:', 1, 11, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(179, 15, 'Berikut yang termasuk komponen utama Theory of Change adalah:', 1, 12, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(180, 15, 'Komponen ToC yang menggambarkan sumber daya yang digunakan dalam program adalah:', 1, 13, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(181, 15, 'Komponen ToC yang menggambarkan kegiatan yang dilakukan dalam program adalah:', 1, 14, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(182, 15, 'Komponen ToC yang menggambarkan hasil langsung dari kegiatan program disebut:', 1, 15, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(183, 15, 'Perubahan jangka menengah yang terjadi sebagai akibat dari output disebut:', 1, 16, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(184, 15, 'Perubahan jangka panjang yang ingin dicapai melalui program disebut:', 1, 17, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(185, 15, 'Dalam Theory of Change, stakeholder adalah:', 1, 18, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(186, 15, 'Salah satu pendekatan dalam menyusun ToC adalah:', 1, 19, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(187, 15, 'Pendekatan backcasting dalam penyusunan ToC berarti:', 1, 20, '2026-03-11 08:33:19', '2026-03-11 08:33:19'),
(188, 16, 'Apa yang dimaksud dengan Theory of Change (ToC)?', 1, 1, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(189, 16, 'Theory of Change digunakan untuk membantu memahami hubungan antara:', 1, 2, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(190, 16, 'Theory of Change menggunakan pendekatan analisis yang berfokus pada:', 1, 3, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(191, 16, 'Theory of Change dapat digunakan pada berbagai jenis intervensi berikut, kecuali:', 1, 4, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(192, 16, 'Salah satu tujuan utama penggunaan ToC adalah:', 1, 5, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(193, 16, 'Theory of Change dapat digunakan dalam tahapan berikut:', 1, 6, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(194, 16, 'Pada tahap perencanaan, ToC dapat membantu organisasi untuk:', 1, 7, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(195, 16, 'Dalam perencanaan program, ToC membantu organisasi untuk:', 1, 8, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(196, 16, 'Salah satu manfaat ToC dalam perencanaan program adalah membantu:', 1, 9, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(197, 16, 'Dalam tahap implementasi, ToC berfungsi sebagai:', 1, 10, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(198, 16, 'ToC dapat digunakan sebagai alat komunikasi kepada:', 1, 11, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(199, 16, 'Berikut yang termasuk komponen utama Theory of Change adalah:', 1, 12, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(200, 16, 'Komponen ToC yang menggambarkan sumber daya yang digunakan dalam program adalah:', 1, 13, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(201, 16, 'Komponen ToC yang menggambarkan kegiatan yang dilakukan dalam program adalah:', 1, 14, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(202, 16, 'Komponen ToC yang menggambarkan hasil langsung dari kegiatan program disebut:', 1, 15, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(203, 16, 'Perubahan jangka menengah yang terjadi sebagai akibat dari output disebut:', 1, 16, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(204, 16, 'Perubahan jangka panjang yang ingin dicapai melalui program disebut:', 1, 17, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(205, 16, 'Dalam Theory of Change, stakeholder adalah:', 1, 18, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(206, 16, 'Salah satu pendekatan dalam menyusun ToC adalah:', 1, 19, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(207, 16, 'Pendekatan backcasting dalam penyusunan ToC berarti:', 1, 20, '2026-03-11 09:05:51', '2026-03-11 09:05:51'),
(208, 12, 'Tanggung Jawab Sosial Berdasarkan ISO 26000 adalah merupakan tanggung jawab ...', 1, 1, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(209, 12, 'Terdapat 8 Subjek inti dalam ISO 26000?', 1, 2, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(210, 12, 'Manakah dibawah ini yang merupakan Tanggung Jawab Sosial menurut ISO 26000?', 1, 3, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(211, 12, 'Individu / Organisasi yang mempengaruhi dan terpengaruh aktivitas organisasi disebut ...', 1, 4, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(212, 12, 'Rentang / jangkauan hubungan politik, kontrak, ekonomi atau hubungan lain yang di dalamnya Perusahaan memiliki kemampuan untuk mempengaruhi keputusan atau kegiatan individu atau organisasi disebut ...', 1, 5, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(213, 12, 'Pembangunan yang memenuhi kebutuhan generasi saat ini tanpa mengurangi kemampuan generasi mendatang memenuhi kebutuhannya sendiri, merupakan definisi ...', 1, 6, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(214, 12, 'Tanggung jawab sosial adalah tanggung jawab terhadap ...', 1, 7, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(215, 12, 'Justifikasi untuk melaksanakan proyek, program, atau portofolio program pemberdayaan masyarakat adalah kita harus membuat ...', 1, 8, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(216, 12, 'Sekelompok orang yang tinggal atau beraktivitas di suatu wilayah tertentu, memiliki keterikatan dengan lingkungan fisik maupun sosial, serta menjalin interaksi dan hubungan saling ketergantungan disebut ...', 1, 9, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(217, 12, 'Keberhasilan Pembangunan ekonomi masyarakat dipengaruhi oleh kesiapan masyarakat itu sendiri.', 1, 10, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(218, 12, 'Manakah dari pernyataan berikut ini yang tepat?', 1, 11, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(219, 12, 'Suatu kesatuan sosial yang berskala besar, terdiri dari individu-individu yang heterogen secara latar belakang, budaya, dan kepentingan disebut ...', 1, 12, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(220, 12, 'Perubahan yang dihasilkan dari aktivitas program PPM disebut ...', 1, 13, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(221, 12, 'Community Development adalah proses peningkatan kualitas hidup masyarakat melalui ...', 1, 14, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(222, 12, 'Exit Strategi Program Pelibatan dan Pengembangan Masyarakat dibuat pada tahap ...', 1, 15, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(223, 12, 'Aksi Pemberdayaan Masyarakat dapat berbentuk ...', 1, 16, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(224, 12, 'Tujuan untuk komunikasi CSR harus terhubung dengan pemangku kepentingan pada tingkat emosional yang sangat relevan, sehingga menghasilkan tindakan dan respons.', 1, 17, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(225, 12, 'Konsep 3P dalam SDGs mengacu pada 3 aspek yakni ...', 1, 18, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(226, 12, 'Berikut ini manakah yang tepat melihat program pengembangan masyarakat?', 1, 19, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(227, 12, 'Salah satu prinsip pemberdayaan masyarakat adalah kemandirian yang berarti ...', 1, 20, '2026-03-27 07:01:17', '2026-03-27 07:01:17'),
(228, 11, 'Tanggung Jawab Sosial Berdasarkan ISO 26000 adalah merupakan tanggung jawab ...', 1, 1, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(229, 11, 'Terdapat 8 Subjek inti dalam ISO 26000?', 1, 2, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(230, 11, 'Manakah dibawah ini yang merupakan Tanggung Jawab Sosial menurut ISO 26000?', 1, 3, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(231, 11, 'Individu / Organisasi yang mempengaruhi dan terpengaruh aktivitas organisasi disebut ...', 1, 4, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(232, 11, 'Rentang / jangkauan hubungan politik, kontrak, ekonomi atau hubungan lain yang di dalamnya Perusahaan memiliki kemampuan untuk mempengaruhi keputusan atau kegiatan individu atau organisasi disebut ...', 1, 5, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(233, 11, 'Pembangunan yang memenuhi kebutuhan generasi saat ini tanpa mengurangi kemampuan generasi mendatang memenuhi kebutuhannya sendiri, merupakan definisi ...', 1, 6, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(234, 11, 'Tanggung jawab sosial adalah tanggung jawab terhadap ...', 1, 7, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(235, 11, 'Justifikasi untuk melaksanakan proyek, program, atau portofolio program pemberdayaan masyarakat adalah kita harus membuat ...', 1, 8, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(236, 11, 'Sekelompok orang yang tinggal atau beraktivitas di suatu wilayah tertentu, memiliki keterikatan dengan lingkungan fisik maupun sosial, serta menjalin interaksi dan hubungan saling ketergantungan disebut ...', 1, 9, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(237, 11, 'Keberhasilan Pembangunan ekonomi masyarakat dipengaruhi oleh kesiapan masyarakat itu sendiri.', 1, 10, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(238, 11, 'Manakah dari pernyataan berikut ini yang tepat?', 1, 11, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(239, 11, 'Suatu kesatuan sosial yang berskala besar, terdiri dari individu-individu yang heterogen secara latar belakang, budaya, dan kepentingan disebut ...', 1, 12, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(240, 11, 'Perubahan yang dihasilkan dari aktivitas program PPM disebut ...', 1, 13, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(241, 11, 'Community Development adalah proses peningkatan kualitas hidup masyarakat melalui ...', 1, 14, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(242, 11, 'Exit Strategi Program Pelibatan dan Pengembangan Masyarakat dibuat pada tahap ...', 1, 15, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(243, 11, 'Aksi Pemberdayaan Masyarakat dapat berbentuk ...', 1, 16, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(244, 11, 'Tujuan untuk komunikasi CSR harus terhubung dengan pemangku kepentingan pada tingkat emosional yang sangat relevan, sehingga menghasilkan tindakan dan respons.', 1, 17, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(245, 11, 'Konsep 3P dalam SDGs mengacu pada 3 aspek yakni ...', 1, 18, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(246, 11, 'Berikut ini manakah yang tepat melihat program pengembangan masyarakat?', 1, 19, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(247, 11, 'Salah satu prinsip pemberdayaan masyarakat adalah kemandirian yang berarti ...', 1, 20, '2026-03-27 07:02:37', '2026-03-27 07:02:37'),
(248, 17, 'Apa yang menjadi tuntutan utama bisnis saat ini?', 1, 1, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(249, 17, 'CSV merupakan ...', 1, 2, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(250, 17, 'Perbedaan utama filantropi dengan CSV adalah ...', 1, 3, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(251, 17, 'Tujuan utama CSR adalah ...', 1, 4, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(252, 17, 'CSV bertujuan untuk ...', 1, 5, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(253, 17, 'Konsep CSV pertama kali diperkenalkan oleh ...', 1, 6, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(254, 17, 'Nilai dalam konsep CSV didefinisikan sebagai ...', 1, 7, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(255, 17, 'Salah satu karakteristik CSV adalah ...', 1, 8, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(256, 17, 'Berikut ini yang termasuk tipe CSV adalah …', 1, 9, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(257, 17, 'Tipe CSV “Reconceiving Products and Markets” berfokus pada …', 1, 10, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(258, 17, 'Tipe CSV “Redefining Productivity in the Value Chain” berfokus pada …', 1, 11, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(259, 17, 'Tipe CSV “Enabling Local Cluster Development” bertujuan untuk …', 1, 12, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(260, 17, 'Contoh CSV tipe 1 adalah …', 1, 13, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(261, 17, 'Contoh CSV tipe 2 adalah …', 1, 14, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(262, 17, 'Contoh CSV tipe 3 adalah …', 1, 15, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(263, 17, 'Tahap pertama dalam implementasi CSV adalah …', 1, 16, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(264, 17, 'Mengapa identifikasi isu sosial penting dalam CSV?', 1, 17, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(265, 17, 'Business case dalam CSV harus menunjukkan …', 1, 18, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(266, 17, 'Tantangan utama dalam monitoring CSV adalah …', 1, 19, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(267, 17, 'Tujuan akhir dari CSV adalah …', 1, 20, '2026-04-07 03:31:25', '2026-04-07 03:31:25'),
(268, 18, 'Apa yang menjadi tuntutan utama bisnis saat ini?', 1, 1, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(269, 18, 'CSV merupakan…', 1, 2, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(270, 18, 'Perbedaan utama filantropi dengan CSV adalah…', 1, 3, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(271, 18, 'Tujuan utama CSR adalah…', 1, 4, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(272, 18, 'CSV bertujuan untuk…', 1, 5, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(273, 18, 'Konsep CSV pertama kali diperkenalkan oleh…', 1, 6, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(274, 18, 'Nilai dalam konsep CSV didefinisikan sebagai…', 1, 7, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(275, 18, 'Salah satu karakteristik CSV adalah…', 1, 8, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(276, 18, 'Berikut ini yang termasuk tipe CSV adalah…', 1, 9, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(277, 18, 'Tipe CSV “Reconceiving Products and Markets” berfokus pada…', 1, 10, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(278, 18, 'Tipe CSV “Redefining Productivity in the Value Chain” berfokus pada…', 1, 11, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(279, 18, 'Tipe CSV “Enabling Local Cluster Development” bertujuan untuk…', 1, 12, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(280, 18, 'Contoh CSV tipe 1 adalah…', 1, 13, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(281, 18, 'Contoh CSV tipe 2 adalah…', 1, 14, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(282, 18, 'Contoh CSV tipe 3 adalah…', 1, 15, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(283, 18, 'Tahap pertama dalam implementasi CSV adalah…', 1, 16, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(284, 18, 'Mengapa identifikasi isu sosial penting dalam CSV?', 1, 17, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(285, 18, 'Business case dalam CSV harus menunjukkan…', 1, 18, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(286, 18, 'Tantangan utama dalam monitoring CSV adalah…', 1, 19, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(287, 18, 'Tujuan akhir dari CSV adalah…', 1, 20, '2026-04-07 03:55:42', '2026-04-07 03:55:42'),
(288, 19, 'Apa yang dimaksud dengan Indeks Kepuasan Masyarakat (IKM)?', 1, 1, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(289, 19, 'Tujuan utama pengukuran IKM adalah…', 1, 2, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(290, 19, 'IKM mengukur kepuasan masyarakat secara…', 1, 3, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(291, 19, 'Regulasi pelaksanaan Survei Kepuasan Masyarakat di Indonesia diatur dalam…', 1, 4, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(292, 19, 'Berikut yang termasuk pihak yang dapat melakukan survei IKM adalah…', 1, 5, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(293, 19, 'Prinsip IKM yang menekankan keterbukaan hasil survei adalah…', 1, 6, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(294, 19, 'Prinsip yang menuntut survei dilakukan tanpa keberpihakan adalah…', 1, 7, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(295, 19, 'Frekuensi minimal pelaksanaan survei IKM pada program CSR adalah…', 1, 8, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(296, 19, 'Skala yang umum digunakan dalam pengukuran IKM adalah…', 1, 9, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(297, 19, 'Tahapan pertama dalam pengukuran IKM adalah…', 1, 10, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(298, 19, 'Berikut yang BUKAN termasuk tahapan pengukuran IKM adalah…', 1, 11, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(299, 19, 'Jumlah variabel utama IKM berdasarkan Permenpan adalah…', 1, 12, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(300, 19, 'Contoh variabel dalam IKM adalah…', 1, 13, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(301, 19, 'Metode pengambilan data yang memungkinkan data lebih mendalam adalah…', 1, 14, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(302, 19, 'Rumus Service Quality (SQ) adalah…', 1, 15, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(303, 19, 'Jika nilai SQ negatif, maka artinya…', 1, 16, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(304, 19, 'Kuadran IPA yang menunjukkan “prioritas utama” adalah…', 1, 17, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(305, 19, 'Nilai IKM digunakan untuk…', 1, 18, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(306, 19, 'Analisis univariat dalam IKM digunakan untuk…', 1, 19, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(307, 19, 'Salah satu manfaat utama IKM bagi organisasi adalah…', 1, 20, '2026-04-16 03:46:37', '2026-04-16 03:46:37'),
(308, 20, 'Apa yang dimaksud dengan Indeks Kepuasan Masyarakat (IKM)?', 1, 1, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(309, 20, 'Tujuan utama pengukuran IKM adalah…', 1, 2, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(310, 20, 'IKM mengukur kepuasan masyarakat secara…', 1, 3, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(311, 20, 'Regulasi pelaksanaan Survei Kepuasan Masyarakat di Indonesia diatur dalam…', 1, 4, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(312, 20, 'Berikut yang termasuk pihak yang dapat melakukan survei IKM adalah…', 1, 5, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(313, 20, 'Prinsip IKM yang menekankan keterbukaan hasil survei adalah…', 1, 6, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(314, 20, 'Prinsip yang menuntut survei dilakukan tanpa keberpihakan adalah…', 1, 7, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(315, 20, 'Frekuensi minimal pelaksanaan survei IKM pada program CSR adalah…', 1, 8, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(316, 20, 'Skala yang umum digunakan dalam pengukuran IKM adalah…', 1, 9, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(317, 20, 'Tahapan pertama dalam pengukuran IKM adalah…', 1, 10, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(318, 20, 'Berikut yang BUKAN termasuk tahapan pengukuran IKM adalah…', 1, 11, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(319, 20, 'Jumlah variabel utama IKM berdasarkan Permenpan adalah…', 1, 12, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(320, 20, 'Contoh variabel dalam IKM adalah…', 1, 13, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(321, 20, 'Metode pengambilan data yang memungkinkan data lebih mendalam adalah…', 1, 14, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(322, 20, 'Rumus Service Quality (SQ) adalah…', 1, 15, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(323, 20, 'Jika nilai SQ negatif, maka artinya…', 1, 16, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(324, 20, 'Kuadran IPA yang menunjukkan “prioritas utama” adalah…', 1, 17, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(325, 20, 'Nilai IKM digunakan untuk…', 1, 18, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(326, 20, 'Analisis univariat dalam IKM digunakan untuk…', 1, 19, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(327, 20, 'Salah satu manfaat utama IKM bagi organisasi adalah…', 1, 20, '2026-04-16 04:04:26', '2026-04-16 04:04:26'),
(328, 21, 'Apa tujuan utama dari Social Return on Investment (SROI)?', 1, 1, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(329, 21, 'Konsep “social value” dalam SROI merujuk pada...', 1, 2, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(330, 21, 'Pendekatan SROI bersifat partisipatif karena...', 1, 3, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(331, 21, 'SROI evaluative digunakan untuk...', 1, 4, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(332, 21, 'SROI forecasting digunakan pada tahap...', 1, 5, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(333, 21, 'Berikut yang termasuk prinsip SROI adalah...', 1, 6, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(334, 21, 'Jumlah tahapan utama dalam SROI adalah...', 1, 7, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(335, 21, 'Tahap pertama dalam SROI adalah...', 1, 8, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(336, 21, 'Stakeholder dalam SROI adalah...', 1, 9, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(337, 21, 'Output dalam Theory of Change adalah...', 1, 10, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(338, 21, 'Outcome dalam SROI adalah...', 1, 11, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(339, 21, 'Impact dalam SROI adalah...', 1, 12, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(340, 21, 'Financial proxy digunakan untuk...', 1, 13, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(341, 21, 'Metode berikut untuk pengumpulan data SROI adalah...', 1, 14, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(342, 21, 'Deadweight adalah...', 1, 15, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(343, 21, 'Attribution adalah...', 1, 16, '2026-04-16 04:30:40', '2026-04-16 04:30:40'),
(344, 21, 'Drop-off adalah...', 1, 17, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(345, 21, 'Prinsip “do not overclaim” bertujuan untuk...', 1, 18, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(346, 21, 'Rasio SROI diperoleh dari...', 1, 19, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(347, 21, 'Tujuan utama pelaporan SROI adalah...', 1, 20, '2026-04-16 04:30:41', '2026-04-16 04:30:41'),
(348, 22, 'Apa tujuan utama dari Social Return on Investment (SROI)?', 1, 1, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(349, 22, 'Konsep “social value” dalam SROI merujuk pada...', 1, 2, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(350, 22, 'Pendekatan SROI bersifat partisipatif karena...', 1, 3, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(351, 22, 'SROI evaluative digunakan untuk...', 1, 4, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(352, 22, 'SROI forecasting digunakan pada tahap...', 1, 5, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(353, 22, 'Berikut yang termasuk prinsip SROI adalah...', 1, 6, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(354, 22, 'Jumlah tahapan utama dalam SROI adalah...', 1, 7, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(355, 22, 'Tahap pertama dalam SROI adalah:', 1, 8, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(356, 22, 'Stakeholder dalam SROI adalah:', 1, 9, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(357, 22, 'Output dalam Theory of Change adalah...', 1, 10, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(358, 22, 'Outcome dalam SROI adalah...', 1, 11, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(359, 22, 'Impact dalam SROI adalah...', 1, 12, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(360, 22, 'Financial proxy digunakan untuk...', 1, 13, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(361, 22, 'Metode berikut untuk pengumpulan data SROI adalah...', 1, 14, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(362, 22, 'Deadweight adalah...', 1, 15, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(363, 22, 'Attribution adalah...', 1, 16, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(364, 22, 'Drop-off adalah...', 1, 17, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(365, 22, 'Prinsip “do not overclaim” bertujuan untuk...', 1, 18, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(366, 22, 'Rasio SROI diperoleh dari...', 1, 19, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(367, 22, 'Tujuan utama pelaporan SROI adalah...', 1, 20, '2026-04-16 04:49:59', '2026-04-16 04:49:59'),
(368, 23, 'Apa yang dimaksud dengan Social Mapping?', 1, 1, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(369, 23, 'Tujuan utama Social Mapping bagi perusahaan adalah…', 1, 2, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(370, 23, 'Salah satu alasan penting Social Mapping adalah…', 1, 3, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(371, 23, 'Kapan Social Mapping sebaiknya dilakukan?', 1, 4, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(372, 23, 'Berikut yang bukan fungsi Social Mapping adalah…', 1, 5, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(373, 23, 'Ruang lingkup Social Mapping umumnya berfokus pada…', 1, 6, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(374, 23, 'Tahap awal dalam Social Mapping adalah…', 1, 7, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(375, 23, 'Tahap pengumpulan data primer dilakukan melalui…', 1, 8, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(376, 23, 'Aspek geografis dalam profil lokasi mencakup…', 1, 9, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(377, 23, 'Compass Sustainability terdiri dari dimensi…', 1, 10, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(378, 23, 'Kalender musim digunakan untuk…', 1, 11, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(379, 23, 'Stakeholder adalah…', 1, 12, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(380, 23, 'Pendekatan Pentahelix terdiri dari…', 1, 13, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(381, 23, 'Dalam stakeholder mapping, kelompok “Manage Closely” adalah…', 1, 14, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(382, 23, 'Hubungan negatif antar stakeholder ditandai dengan…', 1, 15, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(383, 23, 'Tujuan utama SLA adalah…', 1, 16, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(384, 23, 'Berikut yang bukan termasuk aset dalam SLA adalah…', 1, 17, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(385, 23, 'Isu utama dalam Social Mapping adalah…', 1, 18, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(386, 23, 'Kerentanan akses berkaitan dengan…', 1, 19, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(387, 23, 'Penentuan prioritas program didasarkan pada…', 1, 20, '2026-04-17 03:34:57', '2026-04-17 03:34:57'),
(388, 24, 'Apa yang dimaksud dengan Social Mapping?', 1, 1, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(389, 24, 'Tujuan utama Social Mapping bagi perusahaan adalah…', 1, 2, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(390, 24, 'Salah satu alasan penting Social Mapping adalah…', 1, 3, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(391, 24, 'Kapan Social Mapping sebaiknya dilakukan?', 1, 4, '2026-04-17 03:52:30', '2026-04-17 03:52:30'),
(392, 24, 'Berikut yang bukan fungsi Social Mapping adalah…', 1, 5, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(393, 24, 'Ruang lingkup Social Mapping umumnya berfokus pada…', 1, 6, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(394, 24, 'Tahap awal dalam Social Mapping adalah…', 1, 7, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(395, 24, 'Tahap pengumpulan data primer dilakukan melalui…', 1, 8, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(396, 24, 'Aspek geografis dalam profil lokasi mencakup…', 1, 9, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(397, 24, 'Compass Sustainability terdiri dari dimensi…', 1, 10, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(398, 24, 'Kalender musim digunakan untuk…', 1, 11, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(399, 24, 'Stakeholder adalah…', 1, 12, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(400, 24, 'Pendekatan Pentahelix terdiri dari…', 1, 13, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(401, 24, 'Dalam stakeholder mapping, kelompok “Manage Closely” adalah…', 1, 14, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(402, 24, 'Hubungan negatif antar stakeholder ditandai dengan…', 1, 15, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(403, 24, 'Tujuan utama SLA adalah…', 1, 16, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(404, 24, 'Berikut yang bukan termasuk aset dalam SLA adalah…', 1, 17, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(405, 24, 'Isu utama dalam Social Mapping adalah…', 1, 18, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(406, 24, 'Kerentanan akses berkaitan dengan…', 1, 19, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(407, 24, 'Penentuan prioritas program didasarkan pada…', 1, 20, '2026-04-17 03:52:31', '2026-04-17 03:52:31'),
(428, 13, 'Apa tujuan utama penggunaan Logical Framework Approach (LFA) dalam perencanaan program?', 1, 1, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(429, 13, 'Logical Framework Approach (LFA) paling tepat digunakan pada tahap berikut:', 1, 2, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(430, 13, 'Salah satu masalah yang sering terjadi dalam program CSR tanpa perencanaan yang kuat adalah:', 1, 3, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(431, 13, 'Logical Framework Approach membantu memastikan bahwa program memiliki hubungan logis antara:', 1, 4, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(432, 13, 'Tahapan pertama dalam penyusunan Logical Framework Approach adalah:', 1, 5, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(433, 13, 'Salah satu komponen dalam tahapan analisis LFA adalah:', 1, 6, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(434, 13, 'Tujuan dari stakeholder analysis dalam LFA adalah untuk:', 1, 7, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(435, 13, 'Analisis masalah dalam LFA bertujuan untuk:', 1, 8, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(436, 13, 'Dalam LFA, analisis tujuan merupakan proses untuk:', 1, 9, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(437, 13, 'Setelah analisis tujuan dilakukan, langkah berikutnya adalah:', 1, 10, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(438, 13, 'Analisis strategi dalam LFA bertujuan untuk:', 1, 11, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(439, 13, 'Tahapan perencanaan dalam LFA menghasilkan:', 1, 12, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(440, 13, 'Dalam Logical Framework Matrix, indikator berfungsi untuk:', 1, 13, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(441, 13, 'Indikator yang baik dalam LFA harus bersifat:', 1, 14, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(442, 13, 'Dalam LFA, means of verification digunakan untuk:', 1, 15, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(443, 13, 'Dalam Logical Framework, assumptions merujuk pada:', 1, 16, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(444, 13, 'Hubungan logis antara aktivitas, output, outcome, dan tujuan dalam LFA membantu memastikan bahwa:', 1, 17, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(445, 13, 'Dalam implementasi program berbasis LFA, penting untuk memperhatikan:', 1, 18, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(446, 13, 'Salah satu keunggulan penggunaan LFA dalam program pembangunan adalah:', 1, 19, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(447, 13, 'Jika sebuah program tidak memiliki indikator yang jelas, maka dampak program akan:', 1, 20, '2026-04-20 06:45:20', '2026-04-20 06:45:20'),
(448, 14, 'Apa tujuan utama penggunaan Logical Framework Approach (LFA) dalam perencanaan program?', 1, 1, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(449, 14, 'Logical Framework Approach (LFA) paling tepat digunakan pada tahap berikut:', 1, 2, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(450, 14, 'Salah satu masalah yang sering terjadi dalam program CSR tanpa perencanaan yang kuat adalah:', 1, 3, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(451, 14, 'Logical Framework Approach membantu memastikan bahwa program memiliki hubungan logis antara:', 1, 4, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(452, 14, 'Tahapan pertama dalam penyusunan Logical Framework Approach adalah:', 1, 5, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(453, 14, 'Salah satu komponen dalam tahapan analisis LFA adalah:', 1, 6, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(454, 14, 'Tujuan dari stakeholder analysis dalam LFA adalah untuk:', 1, 7, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(455, 14, 'Analisis masalah dalam LFA bertujuan untuk:', 1, 8, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(456, 14, 'Dalam LFA, analisis tujuan merupakan proses untuk:', 1, 9, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(457, 14, 'Setelah analisis tujuan dilakukan, langkah berikutnya adalah:', 1, 10, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(458, 14, 'Analisis strategi dalam LFA bertujuan untuk:', 1, 11, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(459, 14, 'Tahapan perencanaan dalam LFA menghasilkan:', 1, 12, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(460, 14, 'Dalam Logical Framework Matrix, indikator berfungsi untuk:', 1, 13, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(461, 14, 'Indikator yang baik dalam LFA harus bersifat:', 1, 14, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(462, 14, 'Dalam LFA, means of verification digunakan untuk:', 1, 15, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(463, 14, 'Dalam Logical Framework, assumptions merujuk pada:', 1, 16, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(464, 14, 'Hubungan logis antara aktivitas, output, outcome, dan tujuan dalam LFA membantu memastikan bahwa:', 1, 17, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(465, 14, 'Dalam implementasi program berbasis LFA, penting untuk memperhatikan:', 1, 18, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(466, 14, 'Salah satu keunggulan penggunaan LFA dalam program pembangunan adalah:', 1, 19, '2026-04-20 06:45:55', '2026-04-20 06:45:55'),
(467, 14, 'Jika sebuah program tidak memiliki indikator yang jelas, maka dampak program akan:', 1, 20, '2026-04-20 06:45:55', '2026-04-20 06:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2vGD9fSRfLg351zkbKHszr4wduHYopwDhyKkDS6n', NULL, '158.140.171.65', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU3FkR1dkUEZnbk1HZ2NQcHpUNFpvRkFwY3pzaDNJSWxsR3l1YzBWZSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzI6Imh0dHBzOi8vaW1wYWN0YWNhZGVteS5jby5pZC9ob21lIjtzOjU6InJvdXRlIjtzOjQ6ImhvbWUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1777436873),
('cZxFCVm8W1OvRmfOkHbgcPrt0szcENIXY1o1Zpcw', NULL, '31.98.38.114', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaWFtb1Q2UGJxV1p2NVRQdDhVYWxDQTlySDNBRm96b1JkejhoekpPayI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzY6Imh0dHBzOi8vd3d3LmltcGFjdGFjYWRlbXkuY28uaWQvaG9tZSI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1777429112),
('DoEil9BaRKDCUpjJxcBcnTcd4HWtqEanmXTjRtJ7', NULL, '114.5.242.155', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUWM4N0hWNHNKc1RKanB2eGJ2dHhRNHFodmdDMHlDOWlLNldTU0dIUyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzI6Imh0dHBzOi8vaW1wYWN0YWNhZGVteS5jby5pZC9ob21lIjtzOjU6InJvdXRlIjtzOjQ6ImhvbWUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1777433746),
('h3iiOmSVRxWZRCJ8Nli5qwFgEHVP1yUmAjeObIte', NULL, '103.6.214.254', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicERxUjFVd011MG9SWU9lZGpRaWdwUTdQYmFnY200NHZBTXZtVWlxWiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vd3d3LmltcGFjdGFjYWRlbXkuY28uaWQvdXNlci9jbGFzc2VzP3R5cGU9bGVhcm5pbmctcGFja2FnZSI7czo1OiJyb3V0ZSI7czoxMjoidXNlci5jbGFzc2VzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1777433926),
('pIGAL8G8aZb9lrHHAuQP37YMwxd01K0x4DdCAgp4', NULL, '31.98.38.114', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic0dxZ2wxb0RSNWdBdTJOaVdPNnVzMGZGN2l0enk1eE9lTkVkYlFLNyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzE6Imh0dHBzOi8vd3d3LmltcGFjdGFjYWRlbXkuY28uaWQiO3M6NToicm91dGUiO047fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1777429111),
('uLU9ZKiAd09dbsjODAk0012zXPfbd8zV0LAs7ZZF', 2, '2404:8000:1027:db3:bc7f:3fad:6948:96f6', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiQXNwWkNTVnNtOUFBNkVubTBxcHZDcEJEVGVFYTNJYTFBSVJvM3hyQyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE4OiJhZG1pbl9vdHBfdmVyaWZpZWQiO2I6MTtzOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo2MjoiaHR0cHM6Ly9pbXBhY3RhY2FkZW15LmNvLmlkL3VzZXIvY2xhc3Nlcz90eXBlPWxlYXJuaW5nLXBhY2thZ2UiO3M6NToicm91dGUiO3M6MTI6InVzZXIuY2xhc3NlcyI7fX0=', 1777436900);

-- --------------------------------------------------------

--
-- Table structure for table `testimonies`
--

CREATE TABLE `testimonies` (
  `id` bigint UNSIGNED NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL,
  `person_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `person_position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `person_photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonies`
--

INSERT INTO `testimonies` (`id`, `content`, `rating`, `person_name`, `person_position`, `person_photo_url`, `created_at`, `updated_at`) VALUES
(1, 'Materinya sangat berkualitas dan relevan dengan kebutuhan kami sebagai pelaksana program pemberdayaan di perusahaan. Sertifikasi menjadi nilai tambah yang penting dalam memperkuat peran kami di lapangan. Kami berharap pelatihan seperti ini dapat terus berlanjut, karena manfaatnya terasa nyata dan berpotensi memberikan dampak jangka panjang.', 5, 'Taufik Pontoh', 'PT J Resources Bolaang Mongondow', '/storage/testimonies/fdmvkGm2QmUgx3znhPe8PJVxq1U5fhEa0K6yTAs0.jpg', '2026-02-26 14:34:26', '2026-03-02 03:45:36'),
(2, 'Program Impact Academy SROI sangat mendukung kebutuhan kami dalam penyusunan dokumen SROI untuk PROPER Emas Kalbe Farma. Pembelajaran berlangsung nyaman, interaktif, dan dipandu pemateri yang kompeten. Insight yang diperoleh relevan serta aplikatif untuk penguatan program perusahaan.', 5, 'Arrijalul Hakim', 'PT Kalbe Farma Tbk', '/storage/testimonies/ihkrfmJFr1obO2nKFC5ovXr8p58eEd3GaIdCvtB0.jpg', '2026-02-26 14:34:26', '2026-03-02 03:45:14'),
(3, 'Program SROI Impact Academy sangat inspiratif dan interaktif. Banyak wawasan baru yang relevan untuk diterapkan di perusahaan kami. Semoga pembelajaran ini dapat diimplementasikan secara internal, dan kami dapat kembali bergabung pada sesi Impact Academy selanjutnya.', 5, 'Fuji Sri Rahayu', 'PT Sanghiang Perkasa (Kalbe Nutrisionals)', '/storage/testimonies/RkYu8ts4zuOR5OUZUFV96VldxRS6lh79QjxUbzKv.jpg', '2026-02-26 14:34:26', '2026-03-02 03:44:23'),
(4, 'Belajar SROI di Impact Academy benar-benar jadi pengalaman yang menyenangkan. Materinya tidak berhenti di teori, tetapi langsung bisa diterapkan dalam penyusunan laporan maupun praktik di lapangan. Pendekatannya juga sangat memudahkan, bahkan bagi kami yang masih awam. Bagi siapa pun yang ingin memahami SROI secara praktis, Impact Academy jelas jadi tempat belajar yang sangat direkomendasikan.', 5, 'Muhammad Wisnuallam Iskandar', 'PT Asuransi Astra Buana', '/storage/testimonies/Jg5kTkLShrVXIcqRRGQH3eJXd8IWa9gBx6OLVdLU.jpg', '2026-02-26 14:34:26', '2026-03-02 04:17:33'),
(5, 'Very Insightful. Pelatihan dua hari di Impact Academy terasa sangat berdampak bagi saya. Banyak insight baru yang saya dapatkan, terutama tentang SROI dan praktik sustainability yang aplikatif. Materinya tidak hanya membuka wawasan, tetapi juga memberi bekal nyata untuk diterapkan. Saya berharap seluruh ilmu dari para trainer bisa kami implementasikan dengan optimal dan membawa efek positif yang signifikan bagi perusahaan.', 5, 'Koko Hermawan Budiono', 'PT Bank Maspion Indonesia Tbk', '/storage/testimonies/fbMrJsCuliXvxVNoqWgvtempWlxbszMWxYCOY3lz.jpg', '2026-02-26 14:34:26', '2026-03-02 07:18:02'),
(6, 'Mengikuti training Impact Academy ini benar-benar membuka wawasan saya tentang TJSL dan SROI. Meskipun saya tidak memiliki latar belakang di bidang CSR, materi yang disampaikan terasa sangat jelas, aplikatif, dan memudahkan saya memahami peran yang harus dijalankan. Pelatihan ini menjadi bekal berharga bagi kami untuk mengeksekusi tugas ke depan dengan lebih percaya diri sekaligus mendorong program perusahaan agar memberi dampak yang lebih nyata.', 5, 'Adinda Widya', 'PT Bank Maspion Indonesia Tbk', '/storage/testimonies/xMSDVNf7VW3eMTNR6tgpnUP2x9ZBGwLnP5vJDLUA.jpg', '2026-02-26 14:34:26', '2026-03-02 07:17:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('user','admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `company`, `position`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', NULL, NULL, NULL, '2026-02-04 10:58:13', '$2y$12$LzcG.QZV7wQ0EAxAuJ0B6u.bh.RrHgxlEnNqw9Uo2mQRZ3HUaXGqG', 'user', 'd78QSD2gwW', '2026-02-04 10:58:13', '2026-02-04 10:58:13'),
(2, 'Main Admin', 'info@socialimpact.id', NULL, NULL, NULL, '2026-02-04 10:58:13', '$2y$12$49otLR1vzojD.GIcK6/DCORtbgl1rU09MAafmfiovhBQrRhZY7d/G', 'admin', 'TZNxQadPZuVOQOFHYpOEBl95l1YwvDlPwPx1IQ2BAzvMrlUrB4AYRgZ1Sd6q', '2026-02-04 10:58:13', '2026-03-30 07:02:48'),
(3, 'User', 'user@gmail.com', NULL, NULL, NULL, '2026-02-04 10:58:14', '$2y$12$l7xO3F47OFBH0qurpy3q8uY9hVhPHf3aocHHvdKP/qaxej8LCESiy', 'user', NULL, '2026-02-04 10:58:14', '2026-02-04 10:58:14'),
(4, 'Ian', 'ianalebom@gmail.com', NULL, NULL, NULL, '2026-02-04 11:11:52', '$2y$12$pX5URNPkejd9qRwHIiodcepzZsDuRLbjC9zs5HeWunD5ybKVE8Oki', 'admin', '7p5LgDRXLdaq57CpzZM6Bk2qy9zHQoDC1K8Brte5dVodMbSAXx7BD6rS79i7', '2026-02-04 11:09:39', '2026-02-04 11:11:52'),
(5, 'Mohammad Farkhan', 'mohammadfarkhan456@gmail.com', NULL, NULL, NULL, '2026-02-04 12:09:04', '$2y$12$C8pT5AWQRsoUcAx2AsuRP.JeHXnTLLpEBM6h2sAsmzcfSQzmNS00q', 'admin', 'PD6kXCUJFsE6hqn2YDBo85qb8bVqCI5HU1ni154vOXUBPHJ21GVVanfSBEam', '2026-02-04 12:08:08', '2026-04-01 01:19:54'),
(6, 'Muhammad Irfan Aminudin', 'irfan@socialimpact.id', NULL, NULL, NULL, '2026-02-04 12:30:00', '$2y$12$Jk/BB6yXTppUypXVB9TTAuwYUWrlY2EuzXXTHNdhsS3bgEIU80x0C', 'user', NULL, '2026-02-04 12:29:46', '2026-02-04 12:30:00'),
(7, 'Fawzia Ramadhani', 'fawzia.ramadhani@gmail.com', NULL, NULL, NULL, '2026-02-09 09:52:18', '$2y$12$jn4dwHbKsz9WzcqWn5zlaOyBvWGKof/a392eKBKTWF2OOefMfrN5q', 'user', 'yIknYTwSIEOjCsb7gpwORxsjTRq2ZEDe2s99ITPU6vAUbCNifnxqMCfHdtRZ', '2026-02-09 09:49:32', '2026-02-09 09:52:18'),
(8, 'Tri Apriansyah', 'triapriansyah@socialimpact.id', NULL, NULL, NULL, '2026-02-13 03:34:13', '$2y$12$S0cMvwvPFma/faE0EjDn.Obnd9sscQ3/T8NCJd6rY8SjLSOdKN3YW', 'user', 'l63truyuRMmOVZbVGBRzvayBfiHUD8duzcQawPFi9KexnMCze5ohDrHzPdYY', '2026-02-13 03:33:51', '2026-02-13 03:34:13'),
(9, 'Tia Rahma Putri', 'tiarahmaputrii@gmail.com', NULL, NULL, NULL, '2026-03-30 02:47:22', '$2y$12$bV6a7GUabsJcWhRiZ442F.4Ql4s.lL2Tl3FFyo3rjpjCxoKz9xICa', 'user', NULL, '2026-03-30 02:46:43', '2026-03-30 02:47:22'),
(10, 'Afan Kurniawan', 'afan.kurniawan@socialimpact.id', NULL, NULL, NULL, '2026-03-30 03:10:26', '$2y$12$YXZkaWRc237XJTlxM1rO6.XX5W1V4X5Ed2.D8L6aHzAZhC6JRUm0G', 'user', 'q5MeAEDEriC5EuhbcalgYvoNyYBZVV0nIoj7pviqk79N2nz8arrOwg4c3Uj7', '2026-03-30 03:08:42', '2026-03-30 03:10:26'),
(11, 'Anggun Intan Permata Sari', 'anggunintan11@gmail.com', NULL, NULL, NULL, '2026-03-30 03:19:06', '$2y$12$/81HtbXaAMq/mPt2OoYYwOHOxKNVTuCdTp4TOKgNpUnShBBDiko8C', 'user', NULL, '2026-03-30 03:13:48', '2026-03-30 03:19:06'),
(12, 'Ratnasari Putri Utami', 'ratnasariputri.utm@gmail.com', NULL, NULL, NULL, '2026-03-30 03:18:42', '$2y$12$v3LnHB9vLsF7w7IdhT833OMVKRH8RT8JapaMjNwIehGeGmhjAgE9C', 'user', NULL, '2026-03-30 03:17:43', '2026-03-30 03:18:42'),
(13, 'Duwi Setiya Ariyanti', 'duwisetiyaa@gmail.com', NULL, NULL, NULL, '2026-03-30 03:41:10', '$2y$12$2YQZntJQyTUo3mO.HYeajOFlvVKNpYmWZJG1XFs0pxiZbHvijcXmC', 'user', NULL, '2026-03-30 03:40:29', '2026-03-30 03:41:10'),
(14, 'Dede Darmawan', 'darmawandede47@gmail.com', NULL, NULL, NULL, '2026-03-30 04:01:47', '$2y$12$tYDpigDZl187tkwl38nmz.nHVK0RHJm0.krA0RfX1LPUQ5RTfXCYe', 'user', NULL, '2026-03-30 04:01:25', '2026-03-30 04:01:47'),
(15, 'Winar Nur Aisyah Fatimah', 'winarnaf47@gmail.com', NULL, NULL, NULL, '2026-03-30 04:08:21', '$2y$12$67kRrwEZNF1eIKC4zZWiU.ugTtG5LTleIhLSay.Hjpmte0xFquWuS', 'user', '65cpPOL3yr3zoJMxGT5jJczjPaTU2GTID87Yyx403jz1LBrOXdCqRJhUFafE', '2026-03-30 04:06:52', '2026-03-30 04:08:21'),
(16, 'Herlina Wulan Sari', 'herlina.sari@mctn.co.id', NULL, NULL, NULL, '2026-03-30 05:13:51', '$2y$12$W8qm3q7rll5Diz.a9J3qK.c3mKj87aiCCJsTW0VUnusbKON9BK3xm', 'user', 'NFLhEatwQtFr5WmSzfRuZegvybJjBGL16fbdqiPJG5cSblStE6n14NQjJfeC', '2026-03-30 05:10:57', '2026-03-30 05:13:51'),
(17, 'aryan torrido', 'aryanridho@gmail.com', NULL, NULL, NULL, '2026-03-30 06:51:23', '$2y$12$lxB3lj8plKW.spsHFr4uJ.aqm0IVTuw8wHB4R9VzwvC3gwMDQtxvm', 'user', NULL, '2026-03-30 06:50:49', '2026-03-30 06:51:23'),
(18, 'Ale', 'alehansyah321@gmail.com', NULL, NULL, NULL, '2026-03-31 04:39:53', '$2y$12$0Rofjck8HQUcFGj//z8EEuT2UklnpgWtkd5pWifuYqHnMqIqfMB7O', 'user', NULL, '2026-03-31 04:39:09', '2026-03-31 04:39:53'),
(19, 'Fahmi Abdillah', 'fahmi@socialimpact.id', NULL, NULL, NULL, '2026-04-11 07:10:26', '$2y$12$cUyoxg7eKYYVLXP8V0N7N.3lP8Lb.4OAUzesVWNnWMNSnEKagmBMe', 'user', 'Ca0N2Fmdu0vVRK73GTBpQPqddgjsyjjTfppIMmw9EveBmtb9isVjpfY673LO', '2026-04-11 07:09:26', '2026-04-11 07:10:26'),
(20, 'Ramli', 'ramlitamrin.info@gmail.com', '+6281262140736', 'PT Pesona Khatulistiwa Nusantara', 'Community Development Officier', '2026-04-27 23:39:01', '$2y$12$0J6iDASvvYg2ViIvT.b8eu03PFditp3ivq2CehKZXeODj..eyNEl6', 'user', 'iv9smzShqTjNTznIN9Q5vhtopoRZvAOusvGsdE24uwQPK4pac8JeMWkjQV6u', '2026-04-26 03:49:41', '2026-04-27 23:40:49'),
(21, 'Ade Setiawan', 'aadesetiawan784@gmail.com', NULL, NULL, NULL, NULL, '$2y$12$ryDdamsgVDl9WaPu.2Hr2O8CaNCPoHS4AoiLLCH9J.yo75wnzxbOS', 'user', NULL, '2026-04-26 04:36:31', '2026-04-26 04:36:31'),
(22, 'Ade Setiawan', 'ade@surveyor.com', NULL, NULL, NULL, NULL, '$2y$12$PAUYR5FUALdSuuKTJELyfeLfIULiKnM61hzXMtMeIYDjr1y.ke0HS', 'user', NULL, '2026-04-26 04:41:09', '2026-04-26 04:41:09'),
(23, 'Palupi Diah Utami', 'palupidiahutami8458@gmail.com', NULL, NULL, NULL, '2026-04-26 09:24:24', '$2y$12$81gu7RsrnD.uTFHLpVXSau9mXHnbTN2clyDQck/rzwWU8yxTsViki', 'user', NULL, '2026-04-26 09:23:18', '2026-04-26 09:24:24');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint UNSIGNED NOT NULL,
  `module_id` bigint UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `youtube_url` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration_sec` int DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '1',
  `is_preview` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `module_id`, `title`, `description`, `youtube_url`, `duration_sec`, `sort_order`, `is_preview`, `created_at`, `updated_at`) VALUES
(40, 10, 'Menyambut Perjalanan Pembelajaran', 'Selamat datang di Impact Academy video e-learning untuk program Sertifikasi BNSP Skema Pelaksana Program Pemberdayaan Masyarakat. Di rangkaian video ini, Kami akan memberikan materi untuk memberikan pemahaman menyeluruh tentang pemberdayaan masyarakat, mulai dari konsep dasar, strategi, hingga implementasi praktis. Kemudian kami akan memandu langkah demi langkah bagaimana menyiapkan bukti tugas untuk memenuhi persyaratan.', 'https://www.youtube.com/watch?v=zWqU-LPq67w', 92, 0, 0, '2026-02-06 03:09:51', '2026-02-06 03:09:51'),
(41, 11, 'Pengenalan Unit Kompetensi Sertifikasi', 'Pada sesi ini, Anda akan diajak memahami secara komprehensif unit-unit kompetensi yang wajib dikuasai sekaligus jenis bukti tugas yang perlu dipersiapkan dalam proses sertifikasi. Materi disusun secara sistematis untuk membantu Anda memetakan kemampuan inti sebagai Pelaksana Program Pemberdayaan Masyarakat, mulai dari tahap perencanaan hingga implementasi di lapangan.\r\n\r\nMelalui sesi ini, Anda akan mempelajari tiga unit kompetensi utama, yaitu Merencanakan Program Pemberdayaan Masyarakat, Melakukan Prakondisi Kegiatan Pemberdayaan Masyarakat, dan Melaksanakan Kegiatan Kelola Sosial. Setiap unit dirancang untuk membekali Anda dengan pemahaman praktis, keterampilan strategis, serta kesiapan profesional agar mampu menjalankan program pemberdayaan secara efektif, terukur, dan berdampak nyata bagi masyarakat.', 'https://www.youtube.com/watch?v=E29TDFw9PUo', 141, 0, 0, '2026-02-06 03:09:58', '2026-02-06 03:09:58'),
(47, 12, 'Introduction: Pentingnya Pemberdayaan Masyarakat', 'Pada sesi pertama ini, Anda akan diajak memahami fondasi utama pemberdayaan masyarakat serta alasan mengapa pendekatan ini menjadi kunci dalam mewujudkan keberlanjutan lingkungan, sosial, dan ekonomi. Melalui pembahasan yang komprehensif, Anda akan mengeksplorasi definisi dan prinsip-prinsip pemberdayaan masyarakat secara lebih mendalam sebagai bekal strategis sebelum memasuki tahapan perencanaan, prakondisi, hingga implementasi program. Sesi ini dirancang untuk membangun cara berpikir yang sistematis, aplikatif, dan berdampak, agar setiap langkah pemberdayaan yang Anda lakukan mampu menciptakan perubahan yang berkelanjutan.', 'https://www.youtube.com/watch?v=fviVIId07e4', 1152, 0, 0, '2026-02-06 03:55:51', '2026-02-06 03:55:51'),
(130, 16, 'Teaser - Sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat', 'Pemberdayaan masyarakat membutuhkan pelaksana yang kompeten dan terstandar agar program benar-benar berdampak. Impact Academy menghadirkan E-Learning Sertifikasi Pelaksana Program Pemberdayaan Masyarakat bersama LSP dan BNSP. Dirancang aplikatif dan berbasis praktik, program ini membekali peserta dengan keterampilan teknis, perencanaan, dan pemahaman lapangan untuk menjalankan inisiatif sosial secara efektif, terukur, dan berkelanjutan.', 'https://www.youtube.com/watch?v=hX12sCZ_C3o', 50, 0, 1, '2026-02-10 08:54:53', '2026-02-10 08:54:53'),
(186, 14, 'Unit Kompetensi Dua: Melakukan Prakondisi Kegiatan Pemberdayaan Masyarakat', 'Pada sesi ini, Anda akan memasuki Unit Kompetensi kedua: Prakondisi Kegiatan Pemberdayaan Masyarakat. Di sini, Anda akan mempelajari langkah strategis untuk memulai program pemberdayaan secara efektif, mulai dari asesmen potensi masyarakat, sosialisasi kepada penerima manfaat, teknik negosiasi yang konstruktif, hingga cara mendokumentasikan proses kerja secara sistematis. Bekal ini akan membantu Anda menyiapkan fondasi program yang kuat, terukur, dan berdampak berkelanjutan bagi masyarakat.', 'https://www.youtube.com/watch?v=zqonA9p0Jfs', 486, 0, 0, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(187, 14, 'Penjelasan Bukti Tugas: Unit Kompetensi 2', 'Setelah mempelajari Unit Kompetensi 2 tentang Prakondisi Kegiatan Pemberdayaan Masyarakat, saatnya masuk ke tahap praktik. Video ini memandu Anda mengerjakan dua bukti tugas utama: menyusun dan melaksanakan Focus Group Discussion (FGD) mulai dari persiapan hingga pelaporan, serta membuat progress report yang memuat capaian, kendala, solusi, dan rencana tindak lanjut. Ikuti langkahnya dan terapkan langsung pada konteks program Anda.', 'https://www.youtube.com/watch?v=ov3FnU14iho', 64, 1, 0, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(188, 14, 'Penugasan Focus Group Discussion - UK 2.1', 'Video ini menyajikan contoh langkah pengerjaan tugas pertama secara praktis dan mudah diikuti. Anda akan melihat cara menyusun dokumen FGD sekaligus memahami alur pelaksanaan Focus Group Discussion secara sistematis. Sebelum masuk ke praktik, materi diawali dengan penjelasan outline dokumen agar proses kerja lebih terarah, rapi, dan siap diterapkan di lapangan. Cocok sebagai panduan awal sebelum mulai praktik langsung.', 'https://www.youtube.com/watch?v=udx_mLEMprU', 264, 2, 0, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(189, 14, 'Penugasan Progress Report - UK 2.2', 'Video ini membahas tahapan lengkap pengerjaan bukti tugas kedua pada Unit Kompetensi 2, yaitu penyusunan dokumen progress report. Anda akan dipandu melalui contoh pengerjaan secara runtut dan praktis agar mudah dipahami. Dengan memahami alur dan strukturnya, peserta dapat menyusun laporan progres secara mandiri, lebih rapi, terukur, dan sesuai standar penilaian yang ditetapkan. Cocok sebagai panduan kerja langsung saat mengerjakan tugas.', 'https://www.youtube.com/watch?v=xWtu18cJEyQ', 236, 3, 0, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(192, 15, 'Unit Kompetensi Tiga: Melaksanakan Kegiatan Kelola Sosial', 'Pada sesi ini, Anda akan mempelajari Unit Kompetensi ketiga: Melaksanakan Kegiatan Kelola Sosial. Materi dirancang untuk membantu Anda memahami cara menyusun rencana kegiatan kelola sosial secara sistematis, menjalankan program di lapangan dengan tepat, serta mendokumentasikan setiap proses dan hasil kerja. Ikuti sesi ini hingga tuntas agar setiap langkah implementasi dapat dilakukan lebih terarah dan terukur.', 'https://www.youtube.com/watch?v=3adxtMM5VX4', 310, 0, 0, '2026-02-13 08:36:37', '2026-02-13 08:36:37'),
(193, 15, 'Penugasan Monitoring dan Evaluasi - UK 3.1', 'Video ini mengajak Anda langsung mengaplikasikan materi Unit Kompetensi 3 tentang Melaksanakan Kegiatan Kelola Sosial. Setelah memahami konsep dan praktiknya, kini saatnya menyusun bukti kompetensi melalui tugas utama: Penyusunan Laporan Monitoring dan Evaluasi. Kerjakan secara sistematis, reflektif, dan berbasis data agar hasilnya relevan, terukur, dan siap diimplementasikan di konteks kerja nyata.', 'https://www.youtube.com/watch?v=57RrInYUySg', 669, 1, 0, '2026-02-13 08:36:37', '2026-02-13 08:36:37'),
(194, 13, 'Unit Kompetensi Satu: Merencanakan Program Pemberdayaan Masyarakat', 'Dalam unit kompetensi ini, Anda akan dibekali kemampuan untuk mempersiapkan pekerjaan, menentukan teknik dan strategi pemberdayaan, merancang program pemberdayaan masyarakat, hingga mendokumentasikan seluruh proses perencanaan secara sistematis. Pembelajaran akan difokuskan pada alat dan metode berbasis data, termasuk TJSL Lifecycle, Stakeholder Mapping, Social Mapping, Theory of Change (ToC), dan Sustainable Livelihood Approach (SLA), agar program yang Anda susun lebih relevan, terukur, dan berkelanjutan.', 'https://www.youtube.com/watch?v=HyavlZsh6F8', 923, 0, 0, '2026-02-13 09:53:25', '2026-02-13 09:53:25'),
(195, 13, 'Penjelasan Bukti Tugas: Unit Kompetensi 1', 'Video ini mengajak Anda melangkah dari pemahaman ke praktik. Setelah mempelajari Unit Kompetensi 1: Merencanakan Program Pemberdayaan Masyarakat, kini saatnya mengaplikasikan materi melalui penugasan terstruktur. Pada sesi ini dijelaskan bentuk dan bukti tugas yang perlu disiapkan sebagai bagian dari proses sertifikasi BNSP Pelaksana Program Pemberdayaan Masyarakat. Pastikan setiap output disusun jelas, relevan, dan siap dinilai.', 'https://www.youtube.com/watch?v=M1mZw8q8Xo4', 66, 1, 0, '2026-02-13 09:53:25', '2026-02-13 09:53:25'),
(196, 13, 'Penugasan Laporan Social Mapping - UK 1.1', 'Video ini menampilkan contoh lengkap pengerjaan tugas pertama agar Anda memahami langkah praktis menyusun laporan Social Mapping yang runtut dan aplikatif. Dipandu secara bertahap, Anda akan melihat cara merangkum data, memetakan stakeholder, menerapkan Sustainable Livelihood Approach, hingga menyusun rekomendasi program pemberdayaan. Materi dirancang jelas dan mudah diikuti sehingga bisa langsung menjadi acuan saat menyusun laporan di lapangan.', 'https://www.youtube.com/watch?v=m1F4-NbvxaA', 459, 2, 0, '2026-02-13 09:53:25', '2026-02-13 09:53:25'),
(197, 13, 'Penugasan Theory of Change - UK 1.2', 'Video ini membahas bukti tugas kedua Unit Kompetensi 1: Penyusunan Theory of Change (ToC). Anda akan dipandu memahami peran ToC sebagai kerangka penting dalam merancang program pemberdayaan masyarakat secara logis, terukur, dan berdampak. Materi disajikan langkah demi langkah agar mudah diikuti, sehingga Anda dapat menyusun ToC yang jelas, relevan, dan siap digunakan sebagai bagian dari bukti tugas sertifikasi Impact Academy.', 'https://www.youtube.com/watch?v=umdvh3aLS5A', 619, 3, 0, '2026-02-13 09:53:25', '2026-02-13 09:53:25'),
(203, 19, 'From Impact to Recognition', 'CSR kini tidak lagi sekadar kewajiban perusahaan, melainkan strategi penting untuk memperkuat keberlanjutan bisnis dan menciptakan nilai bersama. Program CSR dituntut menghasilkan dampak terukur, relevan dengan kebutuhan masyarakat, serta selaras dengan visi perusahaan. Di tengah meningkatnya perhatian pada ESG, CSR berperan krusial sebagai penggerak pilar sosial dan tata kelola. Integrasi CSR dalam kebijakan dan perencanaan menjadi kunci konsistensi, kepatuhan, dan keberlanjutan dampak.', 'https://www.youtube.com/watch?v=DdmLWVxP91Q', 10164, 0, 0, '2026-02-27 09:24:50', '2026-02-27 09:24:50'),
(204, 20, 'Beyond Programs, Creating Impact', NULL, 'https://www.youtube.com/watch?v=Qx2AVQqH2iA', 6764, 0, 0, '2026-02-27 09:25:06', '2026-02-27 09:25:06'),
(205, 21, 'Dana, Dampak, dan Tanggung Jawab', NULL, 'https://www.youtube.com/watch?v=RLYw7-XaVXY', 7932, 0, 0, '2026-03-02 06:51:52', '2026-03-02 06:51:52'),
(206, 22, 'Ruang Budaya, Ruang Bersama', NULL, 'https://www.youtube.com/watch?v=hVIG7y728nA', 7038, 0, 0, '2026-03-02 07:36:12', '2026-03-02 07:36:12'),
(207, 23, 'From Commitment to Impact', 'Bagaimana sustainability dijalankan nyata di sektor energi? Melalui Impact Talks #13, Anda akan memperoleh insight tentang strategi keberlanjutan dan community involvement & development dari tahap perencanaan hingga dampak terukur bagi masyarakat dan bisnis. Peserta juga diajak menelaah studi kasus implementatif lintas industri. Simak penjelasan selengkapnya bersama praktisi berpengalaman: Prima Retno Ardhanie — Vice President TJSL PT PLN (Persero); dan Ibrahim Arsyad — Senior Manager Sustainability & Performance Excellence Medco E&P Indonesia.', 'https://www.youtube.com/watch?v=QJN6aH5JX-U', 7669, 0, 0, '2026-03-02 08:00:43', '2026-03-02 08:00:43'),
(210, 26, 'Driving the Impact of Sustainability', 'Bagaimana kolaborasi lintas sektor mampu mempercepat penurunan emisi karbon? Perubahan iklim menuntut strategi bersama dan aksi kolektif yang terarah. Dalam sesi ini, Anda akan mendalami langkah konkret dekarbonisasi dari sisi riset, kebijakan, hingga implementasi teknis di lapangan. Impact Talks #9 “Driving the Impact of Sustainability” menghadirkan diskusi inspiratif bersama narasumber berpengalaman untuk mendorong dampak keberlanjutan yang nyata dan terukur.', 'https://www.youtube.com/watch?v=_4aDlyBgKNg', 9674, 0, 0, '2026-03-03 09:02:43', '2026-03-03 09:02:43'),
(213, 28, 'Woman in Sustainability', 'Woman in Sustainability menghadirkan perspektif segar tentang kepemimpinan perempuan dalam mendorong praktik keberlanjutan dan implementasi ESG. Bagaimana perubahan terjadi saat lebih banyak perempuan terlibat dalam pengambilan keputusan strategis? Dalam sesi ini, Lucia Karina (Coca-Cola Europacific Partners), Nurafifah (PT Pegadaian), dan Dr. Ir. Amalia Yunita (Arus Liar & Bravo Glamping) berbagi pengalaman, tantangan, serta strategi membangun masa depan yang inklusif dan berkelanjutan.', 'https://www.youtube.com/watch?v=dgtHiz4wcdA', 7698, 0, 0, '2026-03-04 08:39:32', '2026-03-04 08:39:32'),
(214, 29, 'ESG: Challenge and Impact', 'Dunia bisnis bergerak cepat menuju standar baru: ESG (Environmental, Social, and Governance). Isu keberlanjutan kini menjadi tolok ukur reputasi, daya saing, dan kepercayaan publik. Regulasi makin ketat, ekspektasi konsumen meningkat, dan perusahaan dituntut membuktikan dampak nyata. Lewat Impact Talks, pelajari tantangan dan strategi implementasi ESG bersama Abi Nisaka dari PT Kalbe Farma Tbk dan Imad Zaky Mubarak dari PT Jasa Marga (Persero) Tbk.', 'https://www.youtube.com/watch?v=Xrc89xL3zFQ', 8190, 0, 0, '2026-03-04 09:35:24', '2026-03-04 09:35:24'),
(215, 30, 'Peran PPM di Industri Hulu Migas', 'Program Pengembangan Masyarakat (PPM) di industri hulu migas telah menjadi bagian penting dari komitmen perusahaan Kontraktor Kontrak Kerja Sama (KKKS) dalam membangun hubungan yang harmonis dengan masyarakat dan pemangku kepentingan. Namun dalam praktiknya, berbagai tantangan sering muncul, mulai dari pengelolaan ekspektasi masyarakat hingga memastikan program benar-benar memberi dampak nyata. Melalui Impact Talks, tiga praktisi berpengalaman akan membahas strategi, tantangan, dan dampak implementasi PPM bagi perusahaan maupun masyarakat di sekitar wilayah operasi.', 'https://www.youtube.com/watch?v=XNMj2zlQBk4', 8009, 0, 0, '2026-03-06 02:19:14', '2026-03-06 02:19:14'),
(216, 27, 'No One Left Behind', 'Webinar No One Left Behind mengajak Anda memperkuat inklusivitas melalui strategi TJSL dan kolaborasi sosial yang berdampak. Keberlanjutan berarti memastikan setiap kelompok terlibat dan merasakan manfaatnya. Ikuti pembelajaran interaktif bersama Andromedo Cahyo Purnomo (Officer I CSR & SMEPP PT Kilang Pertamina Internasional RU VI Balongan) dan Intan Nugrahaini Putri (Manager Komunikasi dan TJSL PT PLN Persero UID Jakarta Raya) untuk memperluas perspektif dan praktik nyata.', 'https://www.youtube.com/watch?v=g2zsWzh8YQ0', 4169, 0, 0, '2026-03-06 06:28:02', '2026-03-06 06:28:02'),
(217, 32, 'Blue Economy', 'Indonesia memiliki kekayaan laut dan pesisir yang luar biasa besar. Namun, bagaimana cara memanfaatkannya tanpa merusak keberlanjutan alam? Konsep blue economy hadir sebagai pendekatan yang menyeimbangkan pertumbuhan ekonomi maritim dengan tanggung jawab menjaga ekosistem serta meningkatkan kesejahteraan masyarakat pesisir. Dalam Impact Talks #5, para ahli membahas peluang besar sekaligus tantangan nyata dalam menerapkan blue economy di Indonesia, serta bagaimana strategi kolaboratif dapat mendorong pengelolaan laut yang berkelanjutan di masa depan.', 'https://www.youtube.com/watch?v=MaQ9X9QmxV4', 6207, 0, 0, '2026-03-09 04:50:22', '2026-03-09 04:50:22'),
(220, 38, 'Introducing LFA', '<p>Pada sesi ini, kami mengajak Anda memahami komponen utama dalam <strong>Logical Framework Approach (LFA)</strong>, sebuah kerangka kerja yang membantu proyek dirancang secara lebih sistematis dan terarah. Kita akan membahas apa itu LFA, kapan metode ini digunakan, serta siapa saja yang perlu terlibat dalam penyusunannya. Banyak proyek menghadapi kendala mulai dari tujuan yang tidak jelas, pengelolaan sumber daya yang lemah, hingga indikator keberhasilan yang tidak terukur. Melalui LFA, proyek dapat direncanakan lebih matang, dijalankan secara efisien, serta menghasilkan dampak yang nyata dan terukur. Sebelum masuk ke tahap teknis, mari pahami terlebih dahulu konsep dasar LFA.</p>', 'https://www.youtube.com/watch?v=ugFRBRSWbB8', 514, 0, 0, '2026-03-11 01:30:38', '2026-03-11 01:30:38'),
(222, 40, 'Tahapan Perencanaan', '<p>Pada sesi ini kita melanjutkan pembahasan tentang <strong>Logical Framework Approach (LFA)</strong> dengan fokus pada tahapan perencanaan. Setelah sebelumnya memahami tahap analisis, sekarang kita akan melihat bagaimana <strong>pohon tujuan</strong> menjadi fondasi penting dalam merancang LFA. Melalui pohon tujuan, kita dapat memetakan hubungan sebab-akibat antara masalah utama, akar penyebab, hingga dampak yang muncul, sehingga perencanaan program menjadi lebih terarah dan solutif.</p>', 'https://www.youtube.com/watch?v=3R-U1nEzhyI', 619, 0, 0, '2026-03-11 02:09:10', '2026-03-11 02:09:10'),
(224, 41, 'Implementasi, Biaya, dan Sumber Daya', '<p>Pada sesi ini mengulas langkah penting setelah penyusunan <strong>Logical Framework Approach (LFA)</strong>, yaitu bagaimana menerjemahkan Tabel Kerangka Logis menjadi rencana implementasi yang nyata. Pembahasan mencakup penyusunan jadwal kegiatan, penentuan kebutuhan sumber daya, serta perhitungan estimasi biaya program. Tabel ini berfungsi sebagai panduan utama agar waktu, sumber daya, dan anggaran dapat dikelola secara terarah, efektif, dan efisien sehingga pelaksanaan program berjalan sesuai rencana.</p>', 'https://www.youtube.com/watch?v=CKyZYlueFfY', 293, 0, 0, '2026-03-11 02:12:48', '2026-03-11 02:12:48'),
(225, 42, 'Pengantar Theory of Change', '<p>Selamat datang di Impact Academy. Pada sesi e-learning kali ini, kita akan mempelajari <strong>Theory of Change (TOC)</strong> bersama Tri Apriansyah. Materi ini membantu Anda memahami cara merancang perubahan yang terarah dan berdampak melalui pendekatan yang sistematis. Dalam pembelajaran ini, kita akan membahas definisi dan konsep dasar TOC, komponen utamanya, serta tahapan penyusunannya. Sebelum memulai materi, silakan kerjakan pretest terlebih dahulu untuk mengetahui sejauh mana pemahaman awal Anda tentang Theory of Change.</p>', 'https://www.youtube.com/watch?v=b2nXe7WV5rI', 63, 0, 0, '2026-03-11 04:36:31', '2026-03-11 04:36:31'),
(226, 43, 'Definisi dan Konsep Dasar ToC', '<p>Pada sesi ini, kita akan mengenal <strong>Theory of Change (TOC)</strong>, sebuah kerangka berpikir yang membantu merancang program pemberdayaan agar lebih terarah, terukur, dan menghasilkan dampak nyata. Melalui materi ini, Anda akan mempelajari langkah awal menyusun perencanaan program secara sistematis, mulai dari rencana kerja, kebutuhan bahan dan peralatan, perencanaan sumber daya manusia, hingga penyusunan rencana anggaran biaya. Mari kita pelajari setiap komponennya secara bertahap.</p>', 'https://www.youtube.com/watch?v=axco7MbMRMk', 694, 0, 0, '2026-03-11 04:53:50', '2026-03-11 04:53:50'),
(229, 39, 'Tahapan Analisis', '<p>Pada sesi ini, Anda akan mempelajari tahapan penting dalam <strong>Logical Framework Approach (LFA)</strong>. Proses ini terdiri dari dua fase utama: tahap analisis dan tahap perencanaan. Tahap analisis mencakup identifikasi stakeholder, pemetaan masalah, perumusan tujuan, hingga penentuan strategi yang tepat. Sementara itu, tahap perencanaan berfokus pada penyusunan kerangka LFA, penjadwalan kegiatan, serta pengelolaan sumber daya. Video ini mengulas secara khusus tahapan analisis sebagai fondasi merancang proyek yang sistematis, efektif, dan berdampak.</p>', 'https://www.youtube.com/watch?v=0i6W_Gh6ub0', 1063, 0, 0, '2026-03-11 08:09:17', '2026-03-11 08:09:17'),
(232, 44, 'Komponen Utama ToC', '<p>Pada sesi ini, kita akan mengulas komponen utama dalam <strong>Theory of Change (ToC)</strong>. Konsep ini membantu kita memahami bagaimana sebuah program dirancang secara sistematis hingga menghasilkan dampak. Prosesnya dimulai dari penyediaan <strong>input</strong>, dilanjutkan dengan berbagai <strong>aktivitas</strong> yang direncanakan. Aktivitas tersebut menghasilkan <strong>output</strong>, yang kemudian mendorong tercapainya <strong>outcome</strong>. Dari rangkaian inilah sebuah program dapat menciptakan <strong>dampak nyata</strong> yang diharapkan bagi masyarakat.</p>', 'https://www.youtube.com/watch?v=-pMsQzfUhus', 282, 0, 0, '2026-03-11 14:45:40', '2026-03-11 14:45:40'),
(233, 45, 'Langkah Penyusunan ToC', '<p>Pada sesi ini, kita akan mengulas cara menyusun <strong>Theory of Change (ToC)</strong> sebagai fondasi penting dalam merancang program yang berdampak. Penyusunan ToC dilakukan melalui proses yang terstruktur dan melibatkan berbagai pihak agar tercipta kesepahaman mengenai tujuan perubahan yang ingin diwujudkan. Melalui pendekatan yang sistematis dan partisipatif, ToC membantu memetakan hubungan antara kegiatan, hasil, hingga dampak jangka panjang. Dalam pembahasan kali ini, kita akan mengenal dua metode utama dalam menyusun Theory of Change. Mari kita pelajari bersama langkah-langkahnya!</p>', 'https://www.youtube.com/watch?v=Rpu8JSKxsJk', 532, 0, 0, '2026-03-11 14:46:09', '2026-03-11 14:46:09'),
(234, 47, 'Pengantar Pembelajaran', '<p>Halo Sobat Impact! Selamat datang di Impact Academy. Pada sesi e-learning ini, kita akan mengupas konsep Creating Shared Value (CSV) bersama Rio Zakarias Widyandaru. Materi mencakup peran bisnis dalam masyarakat, konsep dasar CSV, tiga tipe CSV, hingga siklus implementasinya. Sebelum memulai pembahasan, Anda dapat mengerjakan pretest untuk mengukur pemahaman awal dan memaksimalkan proses belajar.</p>', 'https://www.youtube.com/watch?v=klzrJ64URLg', 61, 0, 0, '2026-04-06 08:07:31', '2026-04-06 08:07:31'),
(236, 34, 'Definisi dan Konsep CSV', '<p>Di dalam konsep CSV, perusahaan memiliki peran penting dalam memutuskan dan mengelola tantangan, risiko, serta peluang yang ada. Dengan pendekatan ini, perusahaan bisa menciptakan inovasi, pertumbuhan, dan manfaat yang lebih besar bagi masyarakat.</p>', 'https://www.youtube.com/watch?v=qkF6Gqx90Po', 539, 0, 0, '2026-04-06 08:20:48', '2026-04-06 08:20:48'),
(237, 36, 'Proses Implementasi CSV', '<p>Pada sesi ini, kita akan membahas peluang Creating Shared Value (CSV) di tiap tipe dan bagaimana proses mengimplementasikan CSV dalam sebuah bisnis.</p>', 'https://www.youtube.com/watch?v=0pljqBMsx7Q', 570, 0, 0, '2026-04-06 08:28:51', '2026-04-06 08:28:51'),
(239, 48, 'Teaser - Designing CSR Programs that Creating Shared Value', '<p>Dunia bisnis kini bergerak dalam tekanan tinggi, regulasi makin ketat dan ekspektasi pemangku kepentingan terus meningkat. Perusahaan tak lagi cukup mengejar profit, tetapi harus membuktikan dampak nyata bagi masyarakat dan lingkungan. Sayangnya, banyak masih terjebak pada strategi lama dan CSR seremonial. Creating Shared Value (CSV) hadir sebagai solusi: strategi bisnis yang mengintegrasikan nilai ekonomi dan sosial. Melalui Impact Academy, pelajari CSV secara komprehensif, aplikatif, dan siap diterapkan.</p>', 'https://www.youtube.com/watch?v=bwpduxX6Dhw', 131, 0, 1, '2026-04-07 03:04:34', '2026-04-07 03:04:34'),
(240, 35, 'Tiga Tipe CSV', '<p>Pada video kali ini, kita akan mulai membahas 3 tipe Creating Shared Value (CSV) dan bagaimana masing-masing tipe ini bisa diterapkan untuk menciptakan hubungan yang saling menguntungkan antara perusahaan dan masyarakat.</p>', 'https://www.youtube.com/watch?v=x7-XnrDTrtY', 1217, 0, 0, '2026-04-07 03:06:21', '2026-04-07 03:06:21'),
(241, 33, 'Introduction: Peran Bisnis dalam Masyarakat', '<p>Bisnis memiliki peran besar dalam menciptakan kemakmuran ekonomi dengan memenuhi kebutuhan masyarakat dan meraih keuntungan. Saat ini, dunia kini menghadapi tantangan sosial, lingkungan, dan ekonomi yang semakin kompleks, yang memerlukan solusi bersama. Kolaborasi antara pemerintah, LSM, dan bisnis sangat penting untuk mengatasi masalah ini.</p>', 'https://www.youtube.com/watch?v=nlDy39nYLek', 616, 0, 0, '2026-04-07 03:32:05', '2026-04-07 03:32:05'),
(242, 49, 'Teaser - Designing Impactful CID Programs using Logical Framework Approach (LFA)', '<p>Banyak program CSR/TJSL tampak sukses di atas kertas—anggaran terserap, kegiatan berjalan, laporan rapi. Namun saat evaluasi, dampaknya sering tak terukur dan tak menjawab akar masalah. Ini terjadi karena perencanaan kurang strategis dan implementasi tak sistematis. Melalui Logical Framework Approach (LFA), program dirancang lebih logis, terukur, dan berbasis data. Impact Academy menghadirkan pembelajaran LFA agar setiap inisiatif benar-benar berdampak nyata, bukan sekadar asumsi.</p>', 'https://www.youtube.com/watch?v=hQhYti3Go88', 168, 0, 1, '2026-04-07 07:37:44', '2026-04-07 07:37:44'),
(245, 50, 'Pengantar Indeks Kepuasan Masyarakat', '<p>Selamat datang di Impact Academy. Pada sesi e-learning ini, kita akan mengupas Indeks Kepuasan Masyarakat (IKM) sebagai alat penting untuk memahami kualitas layanan dan persepsi publik. Bersama Fahmi Abdillah, Anda akan dipandu mempelajari konsep dasar, metode pengukuran, analisis data, hingga penyusunan laporan IKM. Sebelum mulai, silakan kerjakan pretest untuk mengetahui sejauh mana pemahaman awal Anda terhadap materi ini.</p>', 'https://www.youtube.com/watch?v=qzGKbGBgcH4', 70, 0, 0, '2026-04-16 03:09:33', '2026-04-16 03:09:33'),
(246, 51, 'Definisi dan Konsep Dasar Indeks Kepuasan Masyarakat', '<p>Pada sesi pembuka ini, kita akan mengupas Indeks Kepuasan Masyarakat (IKM) sebagai instrumen strategis untuk menilai kualitas layanan dari instansi pemerintah, perusahaan, hingga organisasi. Melalui video ini, Anda akan memahami definisi IKM, regulasi serta prinsip yang mendasarinya, hingga tujuan dan ruang lingkup pengukurannya secara komprehensif dan aplikatif dalam konteks pelayanan publik.</p>', 'https://www.youtube.com/watch?v=vU9v7P_d_u0', 537, 0, 0, '2026-04-16 03:18:26', '2026-04-16 03:18:26'),
(247, 52, 'Metodologi Pengukuran Indeks Kepuasan Masyarakat', '<p>Pada sesi ini, Anda akan mempelajari secara komprehensif metodologi pengukuran Indeks Kepuasan Masyarakat (IKM). Pembahasan mencakup tahapan pelaksanaan yang sistematis, variabel-variabel utama yang diukur, hingga instrumen yang digunakan dalam proses pengumpulan data. Tidak hanya itu, Anda juga akan memahami metode pengambilan data yang tepat agar hasil pengukuran lebih akurat, relevan, dan dapat digunakan sebagai dasar pengambilan keputusan berbasis dampak.</p>', 'https://www.youtube.com/watch?v=CIF_G2bkR90', 1041, 0, 0, '2026-04-17 16:34:05', '2026-04-17 16:34:05'),
(248, 53, 'Analisis Data Indeks Kepuasan Masyarakat', '<p>Setelah memahami tahapan inisiasi, perencanaan, hingga pelaksanaan dalam Survei Kepuasan Masyarakat pada sesi sebelumnya, kini saatnya melangkah lebih jauh. Di video ini, kita akan fokus mengupas tahap krusial berikutnya, yaitu analisis data Indeks Kepuasan Masyarakat (IKM). Proses ini akan membantu mengubah data menjadi insight bermakna untuk evaluasi dan peningkatan kualitas program secara terukur dan berdampak.</p>', 'https://www.youtube.com/watch?v=x7InLxBPxI8', 1086, 0, 0, '2026-04-17 16:34:45', '2026-04-17 16:34:45'),
(249, 54, 'Pelaporan Indeks Kepuasan Masyarakat', '<p>Setelah memahami tahap analisis data Indeks Kepuasan Masyarakat (IKM) di video sebelumnya, kini saatnya melangkah ke tahap akhir yang tak kalah penting, yaitu pelaporan. Pada tahap ini, Anda akan belajar bagaimana menyusun dan menyajikan hasil secara sistematis melalui laporan akhir IKM, sekaligus merumuskan <em>lesson learned</em> sebagai dasar penguatan strategi dan pengembangan program ke depan yang lebih tepat sasaran dan berdampak.</p>', 'https://www.youtube.com/watch?v=PtqK_3lyeF0', 905, 0, 0, '2026-04-17 16:35:24', '2026-04-17 16:35:24'),
(252, 55, 'TEASER - Indeks Kepuasan Masyarakat', '<p>Banyak program pemberdayaan tampak sukses di atas kertas—kegiatan berjalan, output tercapai, laporan tersusun. Namun, apakah masyarakat benar-benar puas? Tanpa pengukuran yang sistematis, sulit memahami kekuatan dan celah program. Indeks Kepuasan Masyarakat (IKM) hadir sebagai alat ukur objektif dan terstandar. Melalui e-learning Impact Academy, pelajari konsep, metode, hingga analisis IKM untuk memastikan program Anda benar-benar berdampak dan berkelanjutan.</p>', 'https://www.youtube.com/watch?v=_s2XKH_R6C8', 132, 0, 1, '2026-04-17 17:06:09', '2026-04-17 17:06:09'),
(255, 37, 'Pengantar Pembelajaran', '<p>Selamat datang di Impact Academy. Pada sesi e-learning ini kita akan mempelajari <strong>Logical Framework Approach (LFA)</strong>, sebuah pendekatan penting dalam merancang program yang terstruktur dan berdampak. Bersama <strong>Rio Zakarias Widyandaru</strong>, Anda akan memahami konsep dasar LFA, tahapan penyusunannya, serta bagaimana merencanakan implementasi, kebutuhan biaya, dan sumber daya secara sistematis. Sebelum memulai materi, silakan kerjakan pretest untuk mengetahui sejauh mana pemahaman awal Anda tentang LFA.</p>', 'https://www.youtube.com/watch?v=eGX3LqOc1LE', 71, 0, 0, '2026-04-20 06:44:46', '2026-04-20 06:44:46'),
(258, 63, 'Pengantar Pembelajaran - Social Mapping', '<p>Selamat datang di Impact Academy. Pada sesi e-learning kali ini, kita akan mengupas tuntas Social Mapping atau pemetaan sosial bersama Fernando Galang. Materi ini dirancang untuk memperdalam pemahaman Anda terkait konsep dasar, identifikasi stakeholder, pendekatan Sustainable Livelihood, hingga penyusunan rekomendasi yang tepat. Sebelum masuk ke pembahasan, silakan kerjakan pretest untuk mengukur pemahaman awal Anda mengenai Social Mapping.</p>', 'https://youtu.be/p6jXCsShiYg', 0, 0, 0, '2026-04-27 02:02:25', '2026-04-27 02:02:25'),
(259, 64, 'Definisi dan Konsep Dasar Social Mapping', '<p>Pada video pembuka ini, kita akan memahami peran penting Social Mapping dalam merancang program yang tepat sasaran. Social Mapping adalah proses mengenali dan memetakan kondisi sosial masyarakat melalui pengumpulan data terkait potensi, kebutuhan, hingga dinamika sosial ekonomi. Lebih dari sekadar angka, pendekatan ini membantu membaca realitas lapangan secara utuh, mulai dari definisi, fungsi, ruang lingkup, tahapan, hingga identifikasi berbasis kebijakan dan keberlanjutan.</p>', 'https://www.youtube.com/watch?v=xZAOfIKMivU', 984, 0, 0, '2026-04-27 03:18:42', '2026-04-27 03:18:42'),
(260, 65, 'Pemangku Kepentingan (Stakeholder)', '<p>Pada video ini, kita akan mendalami analisis pemangku kepentingan secara komprehensif. Pembahasan dimulai dari konsep dasar stakeholder analysis, dilanjutkan dengan teknik stakeholder mapping untuk mengidentifikasi peran dan pengaruh, memahami hubungan antar pemangku kepentingan, hingga eksplorasi forum sosial masyarakat sebagai ruang kolaborasi. Materi ini dirancang untuk membantu Anda melihat dinamika aktor secara lebih strategis dan aplikatif.</p>', 'https://www.youtube.com/watch?v=2Owht6QWnuo', 767, 0, 0, '2026-04-28 04:48:41', '2026-04-28 04:48:41'),
(261, 66, 'Sustainable Livelihood Approach (SLA)', '<p>Pada video sebelumnya, Anda telah memahami kondisi sosial masyarakat serta analisis stakeholder melalui Social Mapping. Langkah selanjutnya adalah menggali potensi yang dimiliki masyarakat secara lebih mendalam. Pada video kali ini, kita akan membahas pendekatan Sustainable Livelihood Approach (SLA), mulai dari pentingnya SLA, aset yang dimiliki, konteks yang memengaruhi, hingga analisis potensi, masalah, isu, dan kerentanan secara komprehensif.</p>', 'https://www.youtube.com/watch?v=_szAbilaI6o', 648, 0, 0, '2026-04-28 04:49:28', '2026-04-28 04:49:28'),
(262, 67, 'Perumusan Rekomendasi', '<p>Pada video sebelumnya, Anda telah memahami proses analisis dalam social mapping, mulai dari SLA hingga analisis kerentanan. Di sesi kali ini, kita akan masuk ke tahap akhir yang krusial, yaitu penyusunan rekomendasi program. Pembahasan akan mencakup analisis SWOT, penyusunan grand design, Logical Framework Approach (LFA), hingga penentuan prioritas program. Simak sampai tuntas!</p>', 'https://www.youtube.com/watch?v=0QtTfHRsdwg', 573, 0, 0, '2026-04-28 04:57:21', '2026-04-28 04:57:21'),
(263, 62, 'TEASER - Impact Academy Social Mapping', '<p>Perusahaan beroperasi di tengah dinamika sosial yang terus berubah, dengan karakter, kebutuhan, dan tantangan masyarakat yang beragam di setiap wilayah. Tanpa pemahaman sosial yang tepat, risiko kesalahpahaman hingga konflik dapat menghambat operasional. Social mapping menjadi kunci untuk menyusun strategi yang akurat, merancang program berdampak, dan menjaga keberlanjutan bisnis. Melalui e-learning ini, pelajari cara memetakan sosial, memahami stakeholder, dan merancang program pemberdayaan yang relevan.</p>', 'https://www.youtube.com/watch?v=w-dOQV1-nh4', 132, 0, 1, '2026-04-29 02:35:22', '2026-04-29 02:35:22');

-- --------------------------------------------------------

--
-- Table structure for table `video_notes`
--

CREATE TABLE `video_notes` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `video_id` bigint UNSIGNED NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `video_notes`
--

INSERT INTO `video_notes` (`id`, `user_id`, `video_id`, `content`, `created_at`, `updated_at`) VALUES
(1, 14, 41, 'Unit kompetensi yg perlu dikuasai :\n1. Merencanakan ppm\n2. Melakukan prakondisi kegiatan pemberdayaan masyarakat\n3. Melaksanakan kegiatan kelola sosial', '2026-03-30 23:56:13', '2026-03-30 23:56:13'),
(2, 14, 194, 'Tjsl life cycle :\n1. Inisiasi\n2. Perencanaan\n3. Implementasi\n4. Monitoring & control\n5. Evaluasi\n6. Exit strategi', '2026-03-31 13:53:02', '2026-03-31 13:53:02');

-- --------------------------------------------------------

--
-- Table structure for table `video_progress`
--

CREATE TABLE `video_progress` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `video_id` bigint UNSIGNED NOT NULL,
  `last_time_sec` int NOT NULL DEFAULT '0',
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `video_progress`
--

INSERT INTO `video_progress` (`id`, `user_id`, `video_id`, `last_time_sec`, `is_completed`, `completed_at`, `created_at`, `updated_at`) VALUES
(3, 7, 40, 28, 0, NULL, '2026-02-10 02:41:49', '2026-03-27 05:08:43'),
(4, 7, 130, 19, 1, '2026-02-13 08:35:41', '2026-02-10 09:14:07', '2026-04-08 07:35:17'),
(314, 7, 188, 256, 1, '2026-02-13 08:34:20', '2026-02-13 08:34:01', '2026-03-27 05:10:02'),
(316, 17, 130, 49, 1, '2026-04-28 05:01:23', '2026-03-30 07:01:49', '2026-04-28 05:01:23'),
(317, 10, 130, 49, 1, '2026-04-22 12:24:14', '2026-03-30 09:51:24', '2026-04-22 12:24:14'),
(318, 10, 40, 91, 1, '2026-03-30 09:53:52', '2026-03-30 09:52:27', '2026-03-30 09:53:52'),
(319, 10, 41, 140, 1, '2026-03-30 09:57:00', '2026-03-30 09:55:03', '2026-03-30 09:57:13'),
(320, 15, 130, 49, 1, '2026-04-01 09:21:06', '2026-03-30 12:17:21', '2026-04-01 09:21:06'),
(321, 15, 40, 0, 1, '2026-03-30 12:17:45', '2026-03-30 12:17:45', '2026-03-30 12:17:45'),
(322, 15, 41, 0, 1, '2026-03-30 12:17:52', '2026-03-30 12:17:52', '2026-03-30 12:17:52'),
(323, 15, 47, 0, 1, '2026-03-30 12:17:57', '2026-03-30 12:17:57', '2026-03-30 12:17:57'),
(324, 15, 194, 0, 1, '2026-03-30 12:25:39', '2026-03-30 12:25:39', '2026-03-30 12:25:39'),
(325, 15, 195, 55, 1, '2026-03-31 15:09:43', '2026-03-30 12:25:46', '2026-03-31 15:10:41'),
(326, 15, 196, 458, 1, '2026-04-02 04:22:36', '2026-03-30 12:25:52', '2026-04-02 04:22:36'),
(327, 15, 197, 617, 1, '2026-04-01 05:22:20', '2026-03-30 12:25:56', '2026-04-01 05:22:20'),
(328, 13, 130, 48, 1, '2026-03-30 12:30:36', '2026-03-30 12:26:00', '2026-03-30 12:30:39'),
(329, 15, 186, 484, 1, '2026-03-30 12:26:04', '2026-03-30 12:26:04', '2026-03-31 15:36:43'),
(330, 15, 187, 63, 1, '2026-03-30 12:27:00', '2026-03-30 12:27:00', '2026-03-31 22:33:56'),
(331, 15, 188, 262, 1, '2026-03-30 12:27:04', '2026-03-30 12:27:04', '2026-03-31 22:42:52'),
(332, 15, 189, 234, 1, '2026-03-30 12:27:08', '2026-03-30 12:27:08', '2026-04-01 02:03:13'),
(333, 15, 192, 309, 1, '2026-03-30 12:27:13', '2026-03-30 12:27:13', '2026-03-31 22:59:52'),
(334, 15, 193, 667, 1, '2026-04-01 05:20:56', '2026-03-30 12:27:18', '2026-04-01 05:20:56'),
(335, 13, 40, 90, 1, '2026-03-30 12:32:10', '2026-03-30 12:30:57', '2026-03-30 12:32:17'),
(336, 13, 41, 140, 1, '2026-03-30 14:30:21', '2026-03-30 14:28:24', '2026-03-30 14:30:34'),
(337, 13, 47, 1146, 1, '2026-03-30 14:51:04', '2026-03-30 14:32:23', '2026-03-30 14:52:53'),
(338, 11, 130, 49, 1, '2026-04-01 09:21:53', '2026-03-30 14:51:50', '2026-04-01 09:21:53'),
(339, 11, 40, 90, 1, '2026-03-30 14:54:12', '2026-03-30 14:52:59', '2026-03-30 14:54:19'),
(340, 12, 130, 49, 1, '2026-04-01 14:15:00', '2026-03-30 15:27:30', '2026-04-01 14:15:00'),
(341, 12, 40, 90, 1, '2026-03-30 15:38:03', '2026-03-30 15:36:50', '2026-03-30 15:38:10'),
(342, 12, 41, 140, 1, '2026-03-30 15:40:32', '2026-03-30 15:40:32', '2026-03-30 15:43:21'),
(343, 12, 47, 1150, 1, '2026-03-30 16:01:31', '2026-03-30 15:44:23', '2026-03-30 16:03:23'),
(344, 11, 41, 139, 1, '2026-03-30 15:49:06', '2026-03-30 15:47:02', '2026-03-30 15:49:17'),
(345, 12, 194, 922, 1, '2026-03-30 16:20:06', '2026-03-30 16:06:25', '2026-03-30 16:21:37'),
(346, 12, 195, 65, 1, '2026-03-30 16:22:58', '2026-03-30 16:22:08', '2026-03-30 16:23:03'),
(347, 12, 196, 458, 1, '2026-03-30 16:30:05', '2026-03-30 16:23:21', '2026-03-31 14:43:24'),
(348, 12, 197, 617, 1, '2026-03-30 16:40:45', '2026-03-30 16:31:37', '2026-03-30 16:41:44'),
(349, 12, 186, 484, 1, '2026-03-30 16:49:17', '2026-03-30 16:42:09', '2026-03-30 16:50:03'),
(350, 12, 187, 62, 1, '2026-03-30 16:51:31', '2026-03-30 16:50:43', '2026-03-30 16:51:35'),
(351, 12, 188, 262, 1, '2026-03-31 16:11:22', '2026-03-30 16:51:58', '2026-03-31 16:11:22'),
(352, 12, 189, 235, 1, '2026-03-31 14:59:32', '2026-03-30 16:56:26', '2026-03-31 14:59:32'),
(353, 12, 192, 308, 1, '2026-03-30 17:04:55', '2026-03-30 17:00:27', '2026-03-30 17:05:24'),
(354, 12, 193, 566, 1, '2026-03-31 16:15:13', '2026-03-30 17:05:49', '2026-03-31 16:20:45'),
(355, 11, 194, 921, 1, '2026-03-30 23:47:41', '2026-03-30 23:34:00', '2026-03-30 23:49:11'),
(356, 14, 130, 0, 1, '2026-03-30 23:41:26', '2026-03-30 23:41:26', '2026-03-30 23:41:26'),
(357, 14, 40, 91, 1, '2026-03-30 23:44:06', '2026-03-30 23:42:43', '2026-04-01 05:56:29'),
(358, 14, 41, 140, 1, '2026-03-30 23:56:48', '2026-03-30 23:54:14', '2026-04-01 05:56:39'),
(359, 17, 40, 86, 1, '2026-03-30 23:57:13', '2026-03-30 23:56:25', '2026-03-30 23:57:13'),
(360, 17, 41, 136, 1, '2026-03-30 23:59:47', '2026-03-30 23:57:35', '2026-03-30 23:59:47'),
(361, 14, 47, 323, 1, '2026-03-31 09:41:07', '2026-03-30 23:57:36', '2026-04-01 05:56:47'),
(362, 17, 47, 1150, 1, '2026-03-31 00:14:04', '2026-03-31 00:00:13', '2026-03-31 00:14:15'),
(363, 17, 194, 910, 1, '2026-03-31 00:34:33', '2026-03-31 00:19:07', '2026-03-31 00:35:54'),
(364, 11, 195, 55, 1, '2026-03-31 13:15:07', '2026-03-31 00:29:32', '2026-03-31 13:16:09'),
(365, 11, 47, 270, 1, '2026-03-31 00:46:35', '2026-03-31 00:32:00', '2026-03-31 00:46:35'),
(366, 17, 195, 65, 1, '2026-03-31 00:37:15', '2026-03-31 00:36:27', '2026-03-31 00:37:20'),
(367, 17, 196, 429, 1, '2026-03-31 00:45:05', '2026-03-31 00:37:36', '2026-03-31 01:05:21'),
(368, 11, 196, 457, 1, '2026-03-31 00:53:21', '2026-03-31 00:46:56', '2026-03-31 13:28:25'),
(369, 11, 197, 617, 1, '2026-03-31 01:06:24', '2026-03-31 00:57:13', '2026-03-31 01:07:23'),
(370, 11, 186, 484, 1, '2026-03-31 01:14:58', '2026-03-31 01:07:50', '2026-03-31 01:15:44'),
(371, 11, 187, 62, 1, '2026-03-31 01:21:44', '2026-03-31 01:20:56', '2026-03-31 01:21:48'),
(372, 11, 188, 262, 1, '2026-03-31 01:33:52', '2026-03-31 01:26:07', '2026-03-31 01:34:14'),
(373, 11, 189, 234, 1, '2026-03-31 01:38:07', '2026-03-31 01:34:42', '2026-03-31 01:38:26'),
(374, 9, 130, 49, 1, '2026-03-31 14:36:18', '2026-03-31 01:34:53', '2026-03-31 14:36:18'),
(375, 9, 40, 90, 1, '2026-03-31 01:38:14', '2026-03-31 01:37:28', '2026-03-31 01:38:22'),
(376, 11, 192, 296, 1, '2026-03-31 01:46:39', '2026-03-31 01:39:10', '2026-03-31 01:46:56'),
(377, 11, 193, 667, 1, '2026-03-31 02:20:01', '2026-03-31 01:51:34', '2026-03-31 13:57:46'),
(378, 9, 41, 140, 1, '2026-03-31 03:14:51', '2026-03-31 02:00:34', '2026-03-31 03:14:51'),
(379, 9, 47, 1150, 1, '2026-03-31 02:12:54', '2026-03-31 02:03:14', '2026-03-31 03:14:57'),
(380, 17, 197, 412, 1, '2026-03-31 06:58:44', '2026-03-31 02:14:45', '2026-04-05 03:43:00'),
(381, 9, 194, 922, 1, '2026-03-31 02:33:26', '2026-03-31 02:18:09', '2026-03-31 02:33:26'),
(382, 9, 195, 65, 1, '2026-03-31 03:15:00', '2026-03-31 02:33:48', '2026-03-31 03:15:00'),
(383, 9, 196, 458, 1, '2026-03-31 03:15:14', '2026-03-31 02:37:01', '2026-03-31 03:15:14'),
(384, 9, 197, 617, 1, '2026-03-31 02:59:35', '2026-03-31 02:45:05', '2026-03-31 02:59:35'),
(385, 9, 186, 484, 1, '2026-03-31 03:04:49', '2026-03-31 03:00:13', '2026-03-31 03:05:09'),
(386, 9, 187, 62, 1, '2026-03-31 03:06:18', '2026-03-31 03:05:27', '2026-03-31 03:06:21'),
(387, 17, 186, 484, 1, '2026-03-31 03:12:40', '2026-03-31 03:05:33', '2026-03-31 03:12:50'),
(388, 9, 188, 262, 1, '2026-03-31 03:12:45', '2026-03-31 03:06:41', '2026-03-31 03:12:45'),
(389, 9, 189, 226, 1, '2026-03-31 03:16:27', '2026-03-31 03:13:01', '2026-03-31 03:16:27'),
(390, 9, 192, 309, 1, '2026-03-31 03:16:51', '2026-03-31 03:16:49', '2026-03-31 03:17:06'),
(391, 9, 193, 667, 1, '2026-03-31 03:18:16', '2026-03-31 03:17:26', '2026-03-31 03:18:16'),
(392, 17, 187, 48, 1, '2026-03-31 04:21:23', '2026-03-31 03:18:26', '2026-03-31 07:05:05'),
(393, 17, 188, 251, 1, '2026-03-31 04:38:55', '2026-03-31 03:56:20', '2026-04-05 03:45:42'),
(394, 13, 194, 922, 1, '2026-03-31 05:17:39', '2026-03-31 05:03:32', '2026-03-31 05:19:10'),
(395, 13, 195, 65, 1, '2026-03-31 05:20:20', '2026-03-31 05:19:30', '2026-03-31 05:20:23'),
(396, 13, 196, 457, 1, '2026-03-31 05:33:38', '2026-03-31 05:20:54', '2026-03-31 05:33:38'),
(397, 17, 189, 69, 1, '2026-03-31 07:05:09', '2026-03-31 05:30:00', '2026-03-31 07:07:33'),
(398, 13, 197, 617, 1, '2026-03-31 05:44:36', '2026-03-31 05:34:07', '2026-03-31 05:45:34'),
(399, 17, 192, 309, 1, '2026-04-05 03:46:43', '2026-03-31 05:34:37', '2026-04-05 03:46:43'),
(400, 17, 193, 667, 1, '2026-03-31 07:22:16', '2026-03-31 05:40:20', '2026-04-05 03:47:29'),
(401, 13, 186, 1, 1, '2026-03-31 06:22:08', '2026-03-31 05:45:59', '2026-03-31 06:22:11'),
(402, 13, 187, 62, 1, '2026-03-31 06:23:44', '2026-03-31 06:22:41', '2026-03-31 06:23:44'),
(403, 13, 188, 262, 1, '2026-03-31 06:29:13', '2026-03-31 06:24:10', '2026-03-31 06:29:37'),
(404, 13, 189, 8, 1, '2026-03-31 06:38:41', '2026-03-31 06:30:52', '2026-03-31 06:38:50'),
(405, 13, 192, 6, 1, '2026-03-31 06:44:10', '2026-03-31 06:39:10', '2026-03-31 06:44:17'),
(406, 13, 193, 667, 1, '2026-03-31 06:55:16', '2026-03-31 06:44:33', '2026-03-31 06:56:21'),
(407, 16, 130, 48, 1, '2026-03-31 11:36:37', '2026-03-31 10:32:33', '2026-03-31 11:36:37'),
(408, 16, 40, 91, 1, '2026-03-31 10:58:41', '2026-03-31 10:51:57', '2026-03-31 10:59:08'),
(409, 16, 41, 140, 1, '2026-03-31 10:59:29', '2026-03-31 10:59:29', '2026-03-31 11:01:47'),
(410, 16, 47, 294, 1, '2026-03-31 11:02:02', '2026-03-31 11:02:02', '2026-03-31 11:29:32'),
(411, 16, 194, 0, 1, '2026-03-31 11:29:35', '2026-03-31 11:29:35', '2026-03-31 11:29:35'),
(412, 16, 195, 0, 1, '2026-03-31 11:29:52', '2026-03-31 11:29:52', '2026-03-31 11:29:52'),
(413, 16, 196, 0, 1, '2026-03-31 11:30:08', '2026-03-31 11:30:08', '2026-03-31 11:30:08'),
(414, 16, 197, 0, 1, '2026-03-31 11:30:29', '2026-03-31 11:30:29', '2026-03-31 11:30:29'),
(415, 16, 186, 0, 1, '2026-03-31 11:30:52', '2026-03-31 11:30:52', '2026-03-31 11:30:52'),
(416, 16, 188, 0, 1, '2026-03-31 11:31:07', '2026-03-31 11:31:07', '2026-03-31 11:31:07'),
(417, 16, 187, 0, 1, '2026-03-31 11:31:23', '2026-03-31 11:31:23', '2026-03-31 11:31:23'),
(418, 16, 189, 0, 1, '2026-03-31 11:31:44', '2026-03-31 11:31:44', '2026-03-31 11:31:44'),
(419, 16, 192, 0, 1, '2026-03-31 11:32:00', '2026-03-31 11:32:00', '2026-03-31 11:32:00'),
(420, 16, 193, 0, 1, '2026-03-31 11:32:13', '2026-03-31 11:32:13', '2026-03-31 11:32:13'),
(421, 14, 194, 1, 1, '2026-03-31 14:11:16', '2026-03-31 13:49:11', '2026-03-31 14:11:28'),
(422, 14, 195, 65, 1, '2026-03-31 14:13:01', '2026-03-31 14:12:05', '2026-03-31 14:13:01'),
(423, 14, 196, 457, 1, '2026-03-31 23:00:36', '2026-03-31 14:13:36', '2026-03-31 23:00:36'),
(424, 14, 197, 617, 1, '2026-03-31 23:27:01', '2026-03-31 23:01:14', '2026-03-31 23:27:01'),
(425, 14, 186, 484, 1, '2026-03-31 23:44:22', '2026-03-31 23:36:09', '2026-03-31 23:44:22'),
(426, 14, 187, 62, 1, '2026-03-31 23:45:47', '2026-03-31 23:44:43', '2026-03-31 23:45:47'),
(427, 14, 188, 262, 1, '2026-03-31 23:51:08', '2026-03-31 23:46:12', '2026-03-31 23:51:08'),
(428, 14, 189, 235, 1, '2026-04-01 08:02:00', '2026-03-31 23:51:30', '2026-04-01 08:02:00'),
(429, 7, 226, 220, 0, NULL, '2026-04-01 02:16:43', '2026-04-02 09:16:21'),
(430, 14, 192, 257, 1, '2026-04-01 09:17:55', '2026-04-01 08:02:23', '2026-04-01 09:17:55'),
(431, 7, 225, 0, 1, '2026-04-02 09:15:58', '2026-04-02 09:15:58', '2026-04-02 09:15:58'),
(432, 7, 47, 524, 0, NULL, '2026-04-08 07:15:07', '2026-04-08 07:18:45'),
(433, 7, 194, 73, 0, NULL, '2026-04-08 07:20:23', '2026-04-08 07:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `video_resources`
--

CREATE TABLE `video_resources` (
  `id` bigint UNSIGNED NOT NULL,
  `video_id` bigint UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_url` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` enum('pdf','doc','docx','ppt','pptx','xls','xlsx','zip','other') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'other',
  `file_size` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `video_resources`
--

INSERT INTO `video_resources` (`id`, `video_id`, `title`, `file_url`, `file_type`, `file_size`, `created_at`, `updated_at`) VALUES
(60, 188, 'Template Impact Academy - FGD.docx', '/storage/resources/qzK87yUXgmO1EUBodhTp1htHhTFT6BwQRGfIPCnU.docx', 'doc', 321668, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(61, 189, 'Template Impact Academy - Progress Report.docx', '/storage/resources/CqOkq6VSrWtQPcYLQXmqEOZ3MGqGs4Pqsq8ELyIN.docx', 'doc', 320687, '2026-02-13 08:27:56', '2026-02-13 08:27:56'),
(63, 193, 'Template Impact Academy - Monitoring dan Evaluasi.docx', '/storage/resources/9978pzRwwm9W3LfoBM3Cn5C1fudtMJYFBOVQCJrl.docx', 'doc', 329131, '2026-02-13 08:36:37', '2026-02-13 08:36:37'),
(64, 196, 'Template Impact Academy - Laporan Social Mapping.docx', '/storage/resources/309JdQyxyCsX07u2ekFTxBx5syxDaYtLWIy6h8op.docx', 'doc', 327547, '2026-02-13 09:53:25', '2026-02-13 09:53:25'),
(65, 197, 'Template Impact Academy - Theory of Change.docx', '/storage/resources/SdfNAmWZCj6613QmUJZPqsvCmlmWenEcnVhs2PAA.docx', 'doc', 25358, '2026-02-13 09:53:25', '2026-02-13 09:53:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_otps`
--
ALTER TABLE `admin_otps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_otps_user_id_index` (`user_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `certificate_issuances`
--
ALTER TABLE `certificate_issuances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `certificate_issuances_class_id_user_id_unique` (`class_id`,`user_id`),
  ADD UNIQUE KEY `certificate_issuances_issued_code_unique` (`issued_code`),
  ADD KEY `certificate_issuances_user_id_index` (`user_id`);

--
-- Indexes for table `certificate_settings`
--
ALTER TABLE `certificate_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classes_slug_unique` (`slug`),
  ADD KEY `classes_created_by_index` (`created_by`),
  ADD KEY `classes_category_id_index` (`category_id`),
  ADD KEY `classes_status_index` (`status`);

--
-- Indexes for table `class_mentors`
--
ALTER TABLE `class_mentors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `class_mentors_class_id_mentor_id_unique` (`class_id`,`mentor_id`),
  ADD KEY `class_mentors_mentor_id_foreign` (`mentor_id`),
  ADD KEY `class_mentors_class_id_sort_order_index` (`class_id`,`sort_order`);

--
-- Indexes for table `class_orders`
--
ALTER TABLE `class_orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `class_orders_user_id_class_id_pending_lock_unique` (`user_id`,`class_id`,`pending_lock`),
  ADD KEY `class_orders_class_id_foreign` (`class_id`),
  ADD KEY `class_orders_user_id_class_id_index` (`user_id`,`class_id`),
  ADD KEY `class_orders_status_index` (`status`);

--
-- Indexes for table `class_order_status_logs`
--
ALTER TABLE `class_order_status_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_order_status_logs_order_id_index` (`order_id`),
  ADD KEY `class_order_status_logs_status_index` (`status`);

--
-- Indexes for table `class_reviews`
--
ALTER TABLE `class_reviews`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_class_review` (`user_id`,`class_id`),
  ADD KEY `class_reviews_class_id_index` (`class_id`),
  ADD KEY `class_reviews_user_id_index` (`user_id`),
  ADD KEY `class_reviews_enrollment_id_index` (`enrollment_id`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `enrollments_user_id_class_id_unique` (`user_id`,`class_id`),
  ADD KEY `enrollments_class_id_index` (`class_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mentors`
--
ALTER TABLE `mentors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modules_class_id_sort_order_index` (`class_id`,`sort_order`);

--
-- Indexes for table `module_progress`
--
ALTER TABLE `module_progress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `module_progress_user_id_module_id_unique` (`user_id`,`module_id`),
  ADD KEY `module_progress_module_id_index` (`module_id`);

--
-- Indexes for table `page_settings`
--
ALTER TABLE `page_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizzes_module_id_sort_order_index` (`module_id`,`sort_order`),
  ADD KEY `quizzes_module_id_is_pretest_index` (`module_id`,`is_pretest`);

--
-- Indexes for table `quiz_answers`
--
ALTER TABLE `quiz_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_answers_option_id_foreign` (`option_id`),
  ADD KEY `quiz_answers_attempt_id_index` (`attempt_id`),
  ADD KEY `quiz_answers_question_id_index` (`question_id`);

--
-- Indexes for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_attempts_user_id_quiz_id_index` (`user_id`,`quiz_id`),
  ADD KEY `quiz_attempts_quiz_id_index` (`quiz_id`);

--
-- Indexes for table `quiz_options`
--
ALTER TABLE `quiz_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_options_question_id_sort_order_index` (`question_id`,`sort_order`);

--
-- Indexes for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_questions_quiz_id_sort_order_index` (`quiz_id`,`sort_order`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `testimonies`
--
ALTER TABLE `testimonies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_module_id_sort_order_index` (`module_id`,`sort_order`);

--
-- Indexes for table `video_notes`
--
ALTER TABLE `video_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `video_notes_user_id_video_id_index` (`user_id`,`video_id`),
  ADD KEY `video_notes_video_id_index` (`video_id`);

--
-- Indexes for table `video_progress`
--
ALTER TABLE `video_progress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `video_progress_user_id_video_id_unique` (`user_id`,`video_id`),
  ADD KEY `video_progress_video_id_index` (`video_id`);

--
-- Indexes for table `video_resources`
--
ALTER TABLE `video_resources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `video_resources_video_id_index` (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_otps`
--
ALTER TABLE `admin_otps`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `certificate_issuances`
--
ALTER TABLE `certificate_issuances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `certificate_settings`
--
ALTER TABLE `certificate_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `class_mentors`
--
ALTER TABLE `class_mentors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `class_orders`
--
ALTER TABLE `class_orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `class_order_status_logs`
--
ALTER TABLE `class_order_status_logs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `class_reviews`
--
ALTER TABLE `class_reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enrollments`
--
ALTER TABLE `enrollments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mentors`
--
ALTER TABLE `mentors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `module_progress`
--
ALTER TABLE `module_progress`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_settings`
--
ALTER TABLE `page_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `quiz_answers`
--
ALTER TABLE `quiz_answers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=690;

--
-- AUTO_INCREMENT for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `quiz_options`
--
ALTER TABLE `quiz_options`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1839;

--
-- AUTO_INCREMENT for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=468;

--
-- AUTO_INCREMENT for table `testimonies`
--
ALTER TABLE `testimonies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=264;

--
-- AUTO_INCREMENT for table `video_notes`
--
ALTER TABLE `video_notes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `video_progress`
--
ALTER TABLE `video_progress`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=434;

--
-- AUTO_INCREMENT for table `video_resources`
--
ALTER TABLE `video_resources`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_otps`
--
ALTER TABLE `admin_otps`
  ADD CONSTRAINT `admin_otps_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `certificate_issuances`
--
ALTER TABLE `certificate_issuances`
  ADD CONSTRAINT `certificate_issuances_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `certificate_issuances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `classes_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `class_mentors`
--
ALTER TABLE `class_mentors`
  ADD CONSTRAINT `class_mentors_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `class_mentors_mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `mentors` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `class_orders`
--
ALTER TABLE `class_orders`
  ADD CONSTRAINT `class_orders_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `class_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `class_order_status_logs`
--
ALTER TABLE `class_order_status_logs`
  ADD CONSTRAINT `class_order_status_logs_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `class_orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `class_reviews`
--
ALTER TABLE `class_reviews`
  ADD CONSTRAINT `class_reviews_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `class_reviews_enrollment_id_foreign` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `class_reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `enrollments_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `enrollments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `modules`
--
ALTER TABLE `modules`
  ADD CONSTRAINT `modules_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `module_progress`
--
ALTER TABLE `module_progress`
  ADD CONSTRAINT `module_progress_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `module_progress_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_answers`
--
ALTER TABLE `quiz_answers`
  ADD CONSTRAINT `quiz_answers_attempt_id_foreign` FOREIGN KEY (`attempt_id`) REFERENCES `quiz_attempts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_answers_option_id_foreign` FOREIGN KEY (`option_id`) REFERENCES `quiz_options` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  ADD CONSTRAINT `quiz_attempts_quiz_id_foreign` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_attempts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_options`
--
ALTER TABLE `quiz_options`
  ADD CONSTRAINT `quiz_options_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD CONSTRAINT `quiz_questions_quiz_id_foreign` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `video_notes`
--
ALTER TABLE `video_notes`
  ADD CONSTRAINT `video_notes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `video_notes_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `video_progress`
--
ALTER TABLE `video_progress`
  ADD CONSTRAINT `video_progress_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `video_progress_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `video_resources`
--
ALTER TABLE `video_resources`
  ADD CONSTRAINT `video_resources_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
