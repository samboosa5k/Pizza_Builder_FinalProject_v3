-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2019 at 01:52 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizza_builder`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(24, '2014_10_12_000000_create_users_table', 1),
(25, '2014_10_12_100000_create_password_resets_table', 1),
(26, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(27, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(28, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(29, '2016_06_01_000004_create_oauth_clients_table', 1),
(30, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(31, '2019_08_19_000000_create_failed_jobs_table', 1),
(47, '2019_11_07_103426_create_pizzas_table', 2),
(48, '2019_11_07_171139_create_pizza_ingredients_table', 2),
(49, '2019_11_07_174855_create_pizza_order_ingredients_table', 2),
(50, '2019_11_08_090332_create_orders_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('01ff540696017025bc0677d5c703571c3e99ac21befb6fe7f8446d4e23c0c393491b5505bb582dc5', 1, 5, 'pizza_builder', '[]', 0, '2019-11-19 11:56:48', '2019-11-19 11:56:48', '2020-11-19 12:56:48'),
('0238b38e45f4889abb51525804db413568f4c81522796c357a91e5ba534be1cfa30293e44a849bc5', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:05:16', '2019-11-16 14:05:16', '2020-11-16 15:05:16'),
('040ebfdf00a74b4abadb003afb9f5e1408cd6e0ce877d7ad3956f73f9124400e7a05b61bab7587c1', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 15:56:33', '2019-11-13 15:56:33', '2020-11-13 16:56:33'),
('04c8daa8721bd7514f9467d1772e6c76c5c32a35812a44033a06c40011ca47762ced2eedc733eb67', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:15:34', '2019-11-16 14:15:34', '2020-11-16 15:15:34'),
('06c6989c047e3df9de9a5aa8b58b7e20b530700bdd5275dca15e0b8caaab06d1c1a9c149f5d114ce', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:29:25', '2019-11-13 19:29:25', '2020-11-13 20:29:25'),
('0b28daa9462fdfdd8f0cd490c7fe13437672cfd0daa61bff961f0bb79790c7e5f5a3bfa1a2ad5c3a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:17:29', '2019-11-13 16:17:29', '2020-11-13 17:17:29'),
('0e3753de9451c87efe8c31dd9d8b8d17b0913d6ce6ddf9c8770d977cd820a03c3db9d84b6053f8cb', 1, 3, 'pizza_builder', '[]', 0, '2019-11-08 19:22:27', '2019-11-08 19:22:27', '2020-11-08 20:22:27'),
('0fb28c5d12cf91247403fa7646db4ab305cfff312426a52ed93f07c9552f82b378385791a969f074', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:16:52', '2019-11-13 19:16:52', '2020-11-13 20:16:52'),
('16ee7533e4e67c1fc4256ca1feb6baf85ec300949a4ef9c5725010a9035c851b3341ffea83262ec0', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:07:59', '2019-11-09 14:07:59', '2020-11-09 15:07:59'),
('18a3cf597d73ba76c9d08f7927dfe2d437bfde715b434dfd84b2f933f2f324156f7de37d4767d5ff', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:10:59', '2019-11-09 15:10:59', '2020-11-09 16:10:59'),
('191ea355aac094c9fa7723a035011d8bf9d8d21c0e062d89d41bd284a1094a1c25abd6116f242af2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:42:30', '2019-11-09 15:42:30', '2020-11-09 16:42:30'),
('198cb2c7ec693d1f89c5deafee299566b9e5f03db198d6ada9d863944f2f27fac4079ba7a72c7c77', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:39:26', '2019-11-09 14:39:26', '2020-11-09 15:39:26'),
('1bf57b67b1b9c63d5f359509f1bbde4e88b83661fcfde5c808e6bd174834388cc32a668251bf4907', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:55:30', '2019-11-16 13:55:30', '2020-11-16 14:55:30'),
('1ef4d3dc0a2c6f20c012291019ca1e7d9b591b0a8cd77bcfb6aaba9b9db52dff2bd506621490ff09', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 11:48:12', '2019-11-10 11:48:12', '2020-11-10 12:48:12'),
('1eff7ee9aa7ac964976959b01d5cb59ef763cb82b1a16564361645e2db7b7b2332bb5fb08a9183d6', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 12:35:49', '2019-11-09 12:35:49', '2020-11-09 13:35:49'),
('2150fd3bcd63fe498960866295ed2e5de967a3ee0807a23c532be4c02ca6ada32c9ddf0e95db746d', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 12:21:00', '2019-11-09 12:21:00', '2020-11-09 13:21:00'),
('21787d85dd96603ed1a084b2e34e7488ddfd8e44c0df21049ed161f274b64c1bcc1389ae3894df31', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:32:07', '2019-11-09 15:32:07', '2020-11-09 16:32:07'),
('21e4210b58bbc242ebc0db9baaf1a74195e7a6062c0519053b6686850166ffd68e908407a52c8897', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:34:38', '2019-11-09 14:34:38', '2020-11-09 15:34:38'),
('237045f48d91283c4dd35a97246f5b67605a93a2aa8782291b6e26d43b37a38700cbe0e1dd13e8cf', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 18:56:37', '2019-11-13 18:56:37', '2020-11-13 19:56:37'),
('2af684eaf1bd4a81e55d077d96964c359044763d8545268db2de5d471dba3dc54604eb93e062b9d7', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:05:43', '2019-11-16 14:05:43', '2020-11-16 15:05:43'),
('2b2790f45ec05456b83bfee1d8e2305a355f48786a5964e27e123457bac601e4797255abf43c0bb1', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:05:07', '2019-11-10 12:05:07', '2020-11-10 13:05:07'),
('2e260c7ef46f74e1182666df8b8a466a0906659b79e02ef1d21656fd31e9e9568e27c71bf00ec4a3', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:07:15', '2019-11-13 16:07:15', '2020-11-13 17:07:15'),
('2e770e4e0e13ca9184db07ae5b3b78d5fef30f16e511a27b58716c2e1d5060bed8f286e4fcf67626', 1, 5, 'pizza_builder', '[]', 0, '2019-11-20 20:01:40', '2019-11-20 20:01:40', '2020-11-20 21:01:40'),
('2f4022203c447378d2a2a6f98fa0b462e020c0896012f1ccd34ffa919f0fd4812424b18ac372292d', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:09:28', '2019-11-16 14:09:28', '2020-11-16 15:09:28'),
('33376e6d970ba0bdac0ab48787c54280637141ff17ee9b4254af584a65861615d101c0f42347fcdc', 1, 3, 'pizza_builder', '[]', 0, '2019-11-14 12:47:25', '2019-11-14 12:47:25', '2020-11-14 13:47:25'),
('33c1227d8a1e498fadf1928f8a761e8bdb18922dd0d3a7a146fae12ef9f8c2b6157459233afe4c07', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:17:39', '2019-11-13 19:17:39', '2020-11-13 20:17:39'),
('34bfd8e5aa61f5323e5786c2ae0710d844d0937a4f3243b45a8dc5757fcfe3323a830fea903fd0b7', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:09:45', '2019-11-09 15:09:45', '2020-11-09 16:09:45'),
('3550e51e8d57d83e03ce2ddc0e9e0871ddacb3b5229773a4963bea108f211a3f64909eb709df3168', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:17:46', '2019-11-10 12:17:46', '2020-11-10 13:17:46'),
('3970ca5cc11d88b63353708b3a1fb33293f0a9f7cd36462c04938b524dd4c9f0391135fbc9ff2b41', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:07:51', '2019-11-13 19:07:51', '2020-11-13 20:07:51'),
('3d47d52e3b3013dea9f35e9a24fa35f120ad768d1e74fdbe2036c1501bd654799764997c161bb68c', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:16:44', '2019-11-09 14:16:44', '2020-11-09 15:16:44'),
('3d59e3e23d73939580dd888a18c2fb09dea60cf63f89d6ff249d1742d9867be4856bc3e0729e4973', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:28:25', '2019-11-13 17:28:25', '2020-11-13 18:28:25'),
('3e3ccc021e1117a4da6b7e2c4aff9f4cd603797a89edc9a5158a8c238256d3cc55bf25bc61aeef33', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 13:57:21', '2019-11-09 13:57:21', '2020-11-09 14:57:21'),
('3f69dc63178cd8d2fe3295bf941522618926cae9f611bbb86b1ce6c4ee5600605f52e529da2e9cb3', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 15:55:57', '2019-11-13 15:55:57', '2020-11-13 16:55:57'),
('3f9e0de43c94e67543deab4ab12f2ff51453f79ce66253752d53d1f8f6afd33082b5f062f9d9e93b', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 12:33:54', '2019-11-09 12:33:54', '2020-11-09 13:33:54'),
('409ebf5565649a11ae9574fd01bb0bec2e4d85548f257b2348351a42a2fb60816e3fdea0c47c60d4', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:15:58', '2019-11-10 12:15:58', '2020-11-10 13:15:58'),
('4148756f7e9c4012e12228ac2a3f09dead015a3f84cd7f0ddde14cb3fd16de41f9970728ab35d267', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:02:15', '2019-11-13 17:02:15', '2020-11-13 18:02:15'),
('439fdcf67b2113447b0a700a000f3c3d35cfd00a0f79f9cbc07884c6e939baef67210b16dc90c9c5', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:29:15', '2019-11-10 12:29:15', '2020-11-10 13:29:15'),
('44717d02dad98325a83134af559a9545f536370d21e7c999838f521cba9497568c39caf8eb4f63a7', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:17:09', '2019-11-10 12:17:09', '2020-11-10 13:17:09'),
('463361881b4d8f5c077142ac4b42ad4d512bd770507c798f6414fbc4982808b94753c12ab5bca739', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:10:16', '2019-11-13 19:10:16', '2020-11-13 20:10:16'),
('467dd7610d571f55b6a0af5bcb089a935b1db5e1f12530e0561b27ca2db70976fe13f41d534aefb9', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 15:57:36', '2019-11-13 15:57:36', '2020-11-13 16:57:36'),
('48601f23ef05223b1922c25ebbefde19d7bd7154317f0b331dbfbef8d8c8828a2dce7fcf2ce9cd97', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:12:24', '2019-11-09 15:12:24', '2020-11-09 16:12:24'),
('4a9dee08b3f46451c795e5064cf0ec2b3b03ece491bad4aed6cdfc209191a1ad32f0d148d1aefbac', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 16:44:25', '2019-11-16 16:44:25', '2020-11-16 17:44:25'),
('4dd2efc14e71a322b828a6590a24ea065f82854de3346109016bbacf80c4a97c37c8e0602cd33d1f', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 11:12:03', '2019-11-09 11:12:03', '2020-11-09 12:12:03'),
('55b7ce502fa520d2bc3dd5230c56e772e8e7498eb62d2e2f94781abfb33503352a4ca00c2e1723ad', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:49:21', '2019-11-09 15:49:21', '2020-11-09 16:49:21'),
('55fc12a331e13ae65229caa9c515bc42669a890340f8c2b097ab44033b37bd3406439ea876b0ef6c', 1, 5, 'pizza_builder', '[]', 0, '2019-11-20 20:02:41', '2019-11-20 20:02:41', '2020-11-20 21:02:41'),
('5acdb3688ac7377b2c374777b081980a55585737cd68a968532e34f5d3a67ea8939700047b8acf88', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:44:55', '2019-11-13 19:44:55', '2020-11-13 20:44:55'),
('5cd2cc1baa3263d75b8f45b362d905ce0cfb5ac05e6ec4ac06979a75f12915d3386928ce44b98c64', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:30:43', '2019-11-16 13:30:43', '2020-11-16 14:30:43'),
('5e0822865f8794ef3ac9ce45e8868fc8281518f51c334d8b98bee4e5be324bfc0273aa73b2acd37e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:42:50', '2019-11-09 15:42:50', '2020-11-09 16:42:50'),
('5f407d5e8070a304f94fb12996fd9261c06d8653114fb30c2c9fc004507c00451fb14b893f691ac5', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:58:00', '2019-11-09 14:58:00', '2020-11-09 15:58:00'),
('637a1a6396a09b51c98a8d7908e491055eae90c6ea6ade88b50966dd11b4c9c4af75eef8959f5c88', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 12:32:30', '2019-11-09 12:32:30', '2020-11-09 13:32:30'),
('64ac913aa7291d64dfc8c8ff14c2b3a2b027141ba8f28982fee6a54e0394fdaa75b4822dfa9998ba', 1, 5, 'pizza_builder', '[]', 0, '2019-11-20 20:01:22', '2019-11-20 20:01:22', '2020-11-20 21:01:22'),
('6876cb73c6ece2a998176231e1f559c67ba4fccaa96b0ddc3fedc2ba01cad6c3564c9c2a81f0021c', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:45:31', '2019-11-13 16:45:31', '2020-11-13 17:45:31'),
('68c15305b2e8d0ec2d27b0dbbd4cb6963f39c75ef4a837c5e9a6f45572421d8c27bbc82d447c708f', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:01:32', '2019-11-13 17:01:32', '2020-11-13 18:01:32'),
('6f15ebaeb3d3a2c8f516b0f7f8518e29bc5cec1e81e8acf1dd6e732e22d0aa662f30212a71ee7801', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:47:53', '2019-11-13 16:47:53', '2020-11-13 17:47:53'),
('6f909270521d2966c9ffdb1107f861230ad1dd18f23d5a92bf00eb80f8519a77e537112d2afdd512', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:00:50', '2019-11-13 16:00:50', '2020-11-13 17:00:50'),
('7580be4bc921117910da57672a4e3727b524cd9a455fff6a19937a4ed755463b7a90dcde2adafb30', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:28:45', '2019-11-13 19:28:45', '2020-11-13 20:28:45'),
('7744d25bff6db0a769d89ac5b95fea38592a753334a1793d0cabc7ac90d729d69b84d5b653a52c0a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 15:53:24', '2019-11-13 15:53:24', '2020-11-13 16:53:24'),
('7760731263f247237665bebd0a3f2cd891a2562931d3dd0664d8787418a2a232880a81eb4b8a3bb2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:09:00', '2019-11-09 15:09:00', '2020-11-09 16:09:00'),
('78731cf0a6865ba1475737e9a257c1af0b1675e99f599b98defcc8b654ba190e108c1c51b6de8741', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:37:22', '2019-11-10 12:37:22', '2020-11-10 13:37:22'),
('78c637cb0ca39f3ea30ba397081a0c386bd8373bc4781a364350801e9d27c14615c4197fd6c9d228', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 16:30:52', '2019-11-16 16:30:52', '2020-11-16 17:30:52'),
('7997df5ed0174c01ef9cce6fdf35f626327cb68bf2585fda5da6d85b2e1d1e310ebf43dbfcd958c0', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:45:33', '2019-11-09 14:45:33', '2020-11-09 15:45:33'),
('79f6a97d6565f17996889d7fef218acf6d58cac0c79545673ed066891caa2cf361197b755f42a35b', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:07:28', '2019-11-16 14:07:28', '2020-11-16 15:07:28'),
('7a5ba3bd1a23180b666131ba92ca6f71e87f6ef418fc0f973e1ca13c1fda9075e8b4221a9a17d5e2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:00:11', '2019-11-09 15:00:11', '2020-11-09 16:00:11'),
('7b7f01d025b32beeab3b4efd12fd191fdc9f37d2a81fa68a23219a5de700bec915dff89c4242f8fc', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:21:08', '2019-11-09 15:21:08', '2020-11-09 16:21:08'),
('7e23090bdb4d5540998166b499735fc171bc8370081e762bbe009c8f125c52e6911e0ff3d8ccd4e5', 1, 3, 'pizza_builder', '[]', 0, '2019-11-17 13:06:17', '2019-11-17 13:06:17', '2020-11-17 14:06:17'),
('8287ffd7198bd2e1dddac4413694c2675ad27030528f5c48bb65a1612363fa4a40a94fb8ad7d488a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:32:10', '2019-11-09 14:32:10', '2020-11-09 15:32:10'),
('8309baad328989185d70f2f791a53d9bcf6fe78a273b5f0cef1e1476f44c859e4393bf39e0e9c784', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:12:16', '2019-11-13 16:12:16', '2020-11-13 17:12:16'),
('83bbe3935c9440681a33d48745c4b285a05855c009240afd868cb0f373a993f876e83976706ed9af', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:11:25', '2019-11-10 12:11:25', '2020-11-10 13:11:25'),
('88d7de021ebc90a803a5c440cc9667a8718ea460a13a9185cecd190cf37eee40381736449b9c73c8', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:30:19', '2019-11-16 13:30:19', '2020-11-16 14:30:19'),
('8a2761e8e01b227e239f08dcb5e579129ec746aaeb374218a89a2584a785c49b81151156b00dbd87', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 20:16:40', '2019-11-13 20:16:40', '2020-11-13 21:16:40'),
('8b98f8accb14749b7a16c80a57d22495c7dc13b5ae825fbffb07149bf745ab54ee14190ee6260bc2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:22:22', '2019-11-09 14:22:22', '2020-11-09 15:22:22'),
('8ed03ed99d35544c8e6c65d0d2336097b11436d487c00b45efdb243ea1a3e8c016ac068d01e0fcc8', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:26:25', '2019-11-16 13:26:25', '2020-11-16 14:26:25'),
('913c89dbe332e91f621d35a1800fdf7a8780c2638ba77924bf63ebeca787bb74bacfbb25a0894a9e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 11:49:31', '2019-11-10 11:49:31', '2020-11-10 12:49:31'),
('92476c978a7f9652b0539e1c1f6270afb775891c3c76b0a16b1c6f7991d3e36d107a1f874688e901', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:27:06', '2019-11-09 15:27:06', '2020-11-09 16:27:06'),
('9660a26e0069d94aeab27a0403d46e3bb95199102f6cf1e41221cabcfab4723cbb5f5b2ff70a8a6f', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 20:07:42', '2019-11-11 20:07:42', '2020-11-11 21:07:42'),
('9699b05ff41c63706b159fb8eeb6b91a029b477791fa9c011ea59353c3a85a460dd5e126d79c2f0d', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:11:13', '2019-11-13 16:11:13', '2020-11-13 17:11:13'),
('9acf3f91016fd7f73a950c17934a5862470cdb0385f2ad35cd47bd0dd2d7dc7a78ff55b30a4b57fd', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:27:59', '2019-11-13 19:27:59', '2020-11-13 20:27:59'),
('9f2d358ba60045f080c7e85156743a58fd595a8dc82a3ae4107ea5fcdd80072234aa41d960156506', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:25:45', '2019-11-10 12:25:45', '2020-11-10 13:25:45'),
('a2062468500f980a43cccb9ed2fb04a353722b266adbc27ea538db2f7dd60e571335dd3f4ff772df', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:14:27', '2019-11-10 12:14:27', '2020-11-10 13:14:27'),
('a2c243776ae0129068f8a0d1cdec74dbe81f0a8c439d5d432c7ad901a4d499735b7d1df79f65f089', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 19:34:01', '2019-11-11 19:34:01', '2020-11-11 20:34:01'),
('ac75c6a456aead22fbc5df08323ad7cbd643003c19758b862aeaa72bbe6a23707a10adbdf078e086', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:19:02', '2019-11-13 17:19:02', '2020-11-13 18:19:02'),
('aeb4452abc8c1c97f5e98605e0fc1f5b814795d8b3822d3e5470e6ffacd10f638d9e7fdb2fb4954c', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:20:33', '2019-11-13 19:20:33', '2020-11-13 20:20:33'),
('aef004d1e0255c5f11d1414aacd53dd1d9a5bf3f160a75897645e6f74b59ac4ec5073bb436a9f8a3', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:34:27', '2019-11-09 15:34:27', '2020-11-09 16:34:27'),
('b03941238b611d9f47d27c911941d7624391369ad90296307da7fffcaf9305d1ac415842d91dd915', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:58:09', '2019-11-16 13:58:09', '2020-11-16 14:58:09'),
('b0ab1b2c61a64f0696ccb695861fb4bdebf2ded5ba396fcaea22c28ea90a5d76ff3cb2e98aa91952', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:23:38', '2019-11-09 14:23:38', '2020-11-09 15:23:38'),
('b133e3d03f733fed8aefda6157b2122bfdba74807520a0a4663d6add18527ece4d5209cd1257c9a4', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:49:00', '2019-11-09 15:49:00', '2020-11-09 16:49:00'),
('b39670f5320309adc042f5946fdd3d1819968d59945da62a6b452d8261bf1541dcc2f4c1bcecf0b7', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:32:29', '2019-11-13 16:32:29', '2020-11-13 17:32:29'),
('b5067398bc9468a5ce15e15453e70f1792107217d0c62ef54340106c543fc29dcd909cb6319c2200', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 13:06:47', '2019-11-09 13:06:47', '2020-11-09 14:06:47'),
('b5ba94f82c3f5690aefa8bfb78c30798be8cf155a525ca633092cae1bd65dff7857ebace8023855a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:50:05', '2019-11-13 19:50:05', '2020-11-13 20:50:05'),
('b6580cccd5921501ee5f4e54efaa2f9bb7e0865053b05c186c1e3bcef4dfdb0c3d63addcb48a0292', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:37:19', '2019-11-13 17:37:19', '2020-11-13 18:37:19'),
('b74c4bf226037159efc560441daba981d3f34d2bf5c556ae9cd26f55c4d873b8e613619ffd5204cd', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 11:57:26', '2019-11-10 11:57:26', '2020-11-10 12:57:26'),
('b861baf0d8142a724bb4a6b8c19422f0722bc2702ccb97a610c36fb92d5a7dd4c76ec0d0dbcfb287', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 14:26:26', '2019-11-11 14:26:26', '2020-11-11 15:26:26'),
('b8ea82bb628c97ddd6d3ebc6c1d4dca1e8c70799a04e6db9efafb83a520e3fcf63d80c7ce0001196', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:01:24', '2019-11-13 17:01:24', '2020-11-13 18:01:24'),
('b9d2e6d0296843b4d766576d8b89de6d270352ea8f7b8b0bef16f70d9a2191e5f66ba6fffe35ff1e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:48:14', '2019-11-09 15:48:14', '2020-11-09 16:48:14'),
('bb18841262eb5fef859439d9c9f028b1c0d0a39d87aa718d9e1b1bec2b5afd2b733f1c9efa8d50c2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:10:48', '2019-11-09 15:10:48', '2020-11-09 16:10:48'),
('bb55ed1183eb41fd880a383b61e07b08748720db3cd13cbcf161d3482fc9fb97be1e6978f7ac6b35', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 20:21:51', '2019-11-13 20:21:51', '2020-11-13 21:21:51'),
('be53109fb29d8fbd96d17f0aed785f2c232e1c584c607f92db46f63b7fa94c23aa4bb1c9bd1682de', 1, 5, 'pizza_builder', '[]', 0, '2019-11-20 20:04:33', '2019-11-20 20:04:33', '2020-11-20 21:04:33'),
('be7c84dcf3ba3e479b167bde03f8d9680cfc078cb23a52c5fa527ca7dcb32cc6c34abc380a2ae373', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 11:56:38', '2019-11-10 11:56:38', '2020-11-10 12:56:38'),
('c25759e244f48180d2c291d076c1b1f9c60948a7523e86793824b3030e8144da30d86de2d3132aff', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 14:10:23', '2019-11-16 14:10:23', '2020-11-16 15:10:23'),
('c48d94a02b31368c9e63f9842d6d22b964157d5a29699b05921b843b6fe236fc97a28ca1e477c8c2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:43:09', '2019-11-13 19:43:09', '2020-11-13 20:43:09'),
('c5f6780b52d13a65c17fd14bb856021e557d963f77b587a01b34873397058ef6594b22e63f844679', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:42:10', '2019-11-13 19:42:10', '2020-11-13 20:42:10'),
('c92cb2f15a5fdbec5af8af06be4eedf22a61c4bf733518179f330183e90c659c3736f79c788eff71', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:14:35', '2019-11-13 17:14:35', '2020-11-13 18:14:35'),
('ccc7fd32bd612086ed53d27c88becf88cbdb1f65c7dde2ebfcfdcd9208e9dc4efc800b7c54d2728e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:27:58', '2019-11-09 15:27:58', '2020-11-09 16:27:58'),
('cdab94d25643ee0fb96fc4ed68f1048555ec2b65dc62e1608e8b6e283700284d37bc00c3e881d25e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-17 13:06:49', '2019-11-17 13:06:49', '2020-11-17 14:06:49'),
('ce4f77fe888acf8fe227ff2d615d7f89ed8ad91b4ae7faca46e16f99a00bbced54b1a251c23acf7a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:00:10', '2019-11-13 16:00:10', '2020-11-13 17:00:10'),
('cee5f7b9dcea029f6e81908c8960aa2f683026297aac4111f64e67686ee965820eabf923969a0f12', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:46:25', '2019-11-13 19:46:25', '2020-11-13 20:46:25'),
('cfc0a7ae9101f11dbde91e01bf291da461f8847023bba7630bef9dc15e36e9170d6be7ac85f650d2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 19:28:30', '2019-11-11 19:28:30', '2020-11-11 20:28:30'),
('d2d679bc7121656a4cd5b48fbb1a5beb30e6558e65b9bee247b4aececa88d7dfe57de1988b7a3956', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 13:44:50', '2019-11-09 13:44:50', '2020-11-09 14:44:50'),
('d5b63ef14ce02420c060884ef12a034b0cd4a56b1131a5ae8fae5dcccde9c150643b26f70b06105f', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:30:39', '2019-11-10 12:30:39', '2020-11-10 13:30:39'),
('d6e0e3359b993c32c9f7113a370a5a956503de0b51d0c7496575b6e89410af092ac46ef459c92b88', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:10:37', '2019-11-16 13:10:37', '2020-11-16 14:10:37'),
('d7075adb9b8093371c7596c509facdb0ce23f1b07253cb953128143a1c6f573f3b37a3f8fee405e2', 1, 3, 'pizza_builder', '[]', 0, '2019-11-16 13:46:50', '2019-11-16 13:46:50', '2020-11-16 14:46:50'),
('d788fe879132a756a05b14862dbc9dff8062faee2955cd563ba95d6f1a6c2d676c814710f118444a', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 11:36:08', '2019-11-10 11:36:08', '2020-11-10 12:36:08'),
('dbc22446f42d44149dfa2cc9d74e44d7d4b0f94c114a753a6f593150056411cafaed6678f5bbc737', 1, 3, 'pizza_builder', '[]', 0, '2019-11-10 12:22:38', '2019-11-10 12:22:38', '2020-11-10 13:22:38'),
('dbebf814592b333e4a265ecbdfd6f395320acdac64f9c34027ea947d375b1da1dd77bd3c3caf3b66', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:41:12', '2019-11-09 14:41:12', '2020-11-09 15:41:12'),
('dc186acf7d9e2c644f8287bbda76fe43b80b67798073f583c0fa4a56f979fa7b6989b7577e479c00', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:10:10', '2019-11-13 16:10:10', '2020-11-13 17:10:10'),
('dd2d06788c441762f8245999931eea08f7fe2278b6bbf4c9190f74e5409ee7777bb4a2ac25cf2994', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:54:29', '2019-11-09 15:54:29', '2020-11-09 16:54:29'),
('dd5b13d1af5d50a3517708dbe57f903bbc32e5f55a26eaf4383fdde93fee920140d33780c0811264', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:02:14', '2019-11-13 16:02:14', '2020-11-13 17:02:14'),
('e054399a27800fbdde20ee44a4a073c68a96358022403d0b0de8a6f988e282f68d03d462ca373a09', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:15:24', '2019-11-09 14:15:24', '2020-11-09 15:15:24'),
('e4b2d0076ef8ccb8b2b7da58b4a53340e14fe3ea5d7401e87067b86f9171308d28378ce98a326ed6', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:25:35', '2019-11-09 15:25:35', '2020-11-09 16:25:35'),
('e61a90800d91b680399762e4a9e10f1da3a2b3f2421516f7b8711c3f2b92fff08a80db9f52462a95', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 15:27:41', '2019-11-09 15:27:41', '2020-11-09 16:27:41'),
('e81ca0ec7c9de9bc4e9e154148ee33ac874da811ee99ad9d2b6f99e4c016b115e2b45df42f767976', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:35:12', '2019-11-09 14:35:12', '2020-11-09 15:35:12'),
('e979d0dc63fd0b5890d12bb0e6b6ebe30d6f2646b11b18e410e9d46eb2ab69c444c4eac19215681c', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 15:51:50', '2019-11-13 15:51:50', '2020-11-13 16:51:50'),
('ea2a9f8b192f3113e45184aa530f42c7bf8bced0bec97a2d19ff08c86b645e9f3f0909ead8d82d65', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 18:27:22', '2019-11-11 18:27:22', '2020-11-11 19:27:22'),
('ec4d20da317d131689cd5b5039be604ff69f54217a4ea940a79e87048339dcec3b83d08f907e6040', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:06:44', '2019-11-13 19:06:44', '2020-11-13 20:06:44'),
('ef198260273f60698e98943965c981d4f2c71ee647dcf640d5b8a50b8aaa650c2bc6cba032b55aac', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:11:59', '2019-11-13 16:11:59', '2020-11-13 17:11:59'),
('f09df32e0c9a7a24527f92827f6b3e56cbadb43f26f8e896f6d4e701527e959147874443f3b92190', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 16:19:49', '2019-11-13 16:19:49', '2020-11-13 17:19:49'),
('f3609477d57225a4e07770dc7c99df6729fba75b40e8f0f7a51ef4d3c1c830160785d1653a689f64', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:25:30', '2019-11-13 19:25:30', '2020-11-13 20:25:30'),
('f5bbe54116ffb056b73c7897e8721279ce789f13f390d817750bad43400c0f3d9998d64f7871990c', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 20:20:49', '2019-11-13 20:20:49', '2020-11-13 21:20:49'),
('f60424fd6c03ed3b9d02a259e855636eba4e701365d5d4a471a7c1c273df697a56541c2a53787cc4', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 14:30:42', '2019-11-11 14:30:42', '2020-11-11 15:30:42'),
('f927ebadde749c356f2155ce3fb48b044bceaf9c7dd8efda179fa815ac7c409db8b0b2f792895c10', 1, 3, 'pizza_builder', '[]', 0, '2019-11-11 20:00:39', '2019-11-11 20:00:39', '2020-11-11 21:00:39'),
('f93b098d10417d77998b040e0ab6ea6b1f44544b7fad4dae1296517a642d8604d32f51b8087fd2a5', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 19:39:55', '2019-11-13 19:39:55', '2020-11-13 20:39:55'),
('fd95acae58dd2182a37f094e31e28cc08c0d5ff2b30e28a16a72e71d9620f06af1821b5e2479d7a8', 1, 3, 'pizza_builder', '[]', 0, '2019-11-13 17:29:14', '2019-11-13 17:29:14', '2020-11-13 18:29:14'),
('fdb2baaec1ad32ca0f94f205bfbb9a1c3e3c41337de0898628e00e082b5158271a2429d6f8a3db7e', 1, 3, 'pizza_builder', '[]', 0, '2019-11-09 14:21:42', '2019-11-09 14:21:42', '2020-11-09 15:21:42');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'AVDHvZ81wpQ7AV4dVNLRLajhMld6d01AbCa1Ioj7', 'http://localhost', 1, 0, 0, '2019-11-08 19:21:28', '2019-11-08 19:21:28'),
(2, NULL, 'Laravel Password Grant Client', 'mtKqRLqEnnkQFYY3sdhULA6iV8pUPHTs48kwKaRl', 'http://localhost', 0, 1, 0, '2019-11-08 19:21:29', '2019-11-08 19:21:29'),
(3, NULL, 'Laravel Personal Access Client', 'UlR6BZCQTsEHg85tBaA3mceLSLIuwNkWx0bKOWh8', 'http://localhost', 1, 0, 0, '2019-11-08 19:21:33', '2019-11-08 19:21:33'),
(4, NULL, 'Laravel Password Grant Client', 'LDi7Lo9Bx8ObKl8PftByZ2JPAKW689fOG0jpgAhn', 'http://localhost', 0, 1, 0, '2019-11-08 19:21:33', '2019-11-08 19:21:33'),
(5, NULL, 'Laravel Personal Access Client', 'dRHLlZnoLGalmXY0xfyoRnBldbBFqbKuaSpgtipe', 'http://localhost', 1, 0, 0, '2019-11-17 18:32:01', '2019-11-17 18:32:01'),
(6, NULL, 'Laravel Password Grant Client', 'tEEf48NShFt7VSlzxYrijBhhmtga9LxZhpW88Wwu', 'http://localhost', 0, 1, 0, '2019-11-17 18:32:01', '2019-11-17 18:32:01');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-11-08 19:21:28', '2019-11-08 19:21:28'),
(2, 3, '2019-11-08 19:21:33', '2019-11-08 19:21:33'),
(3, 5, '2019-11-17 18:32:01', '2019-11-17 18:32:01');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` bigint(20) UNSIGNED DEFAULT NULL,
  `street_and_housenumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_price` float DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'in_progress',
  `created_at` datetime NOT NULL DEFAULT '2019-11-08 21:58:57'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `street_and_housenumber`, `postcode`, `city`, `order_price`, `status`, `created_at`) VALUES
(1, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(2, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(3, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(4, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(5, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(6, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(7, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(8, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(9, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(10, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(11, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(12, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(13, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(14, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(15, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(16, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(17, 'Admin', 'The Boss', NULL, 31617983364, 'Pizza Street 24', '1343BJ', 'Prague', NULL, 'complete', '2019-11-08 21:58:57'),
(18, 'Adi', 'Byrne', NULL, 123, 'Star', '123', 'AD', 7, 'complete', '2019-11-22 15:04:58'),
(19, 'Adi', 'Byrne', NULL, 123, 'Star', '123', 'AD', 7, 'complete', '2019-11-22 15:05:03'),
(20, 'asdf', 'asdf', NULL, 123, 'HAvik', '123', 'HAlv', 4, 'complete', '2019-11-22 15:06:28'),
(21, 'asd', 'ad', NULL, 123, 'HAs', '123', 'Paris', 5, 'complete', '2019-11-22 15:46:20'),
(22, 'a', 'a', NULL, 1, 'f', '111', 'alm', 4, 'complete', '2019-11-22 15:50:37'),
(23, 'a', 'a', NULL, 1, 'f', '111', 'alm', 4, 'complete', '2019-11-22 15:50:56'),
(24, 'q', 'q', NULL, 4, 's', '1', 'c', 5, 'complete', '2019-11-22 15:54:22'),
(25, 'h', 'h', NULL, 1, 'h', '1', 'c', 4, 'complete', '2019-11-22 15:55:52'),
(26, 'j', 'j', NULL, 1, 's', '1', 'x', 5, 'complete', '2019-11-22 15:58:29'),
(27, 'a', 'a', NULL, 1, 'h', '1', 'c', 4, 'complete', '2019-11-22 16:13:02'),
(28, 'a', 'q', NULL, 1, 'S', '1', 'C', 5, 'complete', '2019-11-22 16:22:26'),
(29, 'h', 'h', NULL, 1, 'q', '1', 'S', 5, 'in_progress', '2019-11-22 16:33:13'),
(30, 'q', 'q', NULL, 1, 's', '1', 'c', 5, 'complete', '2019-11-22 16:39:44'),
(31, 'q', 'q', NULL, 1, 'f', '1', 'a', 5, 'in_progress', '2019-11-22 16:42:35'),
(32, 'q', 'q', NULL, 1, 'a', '1', 'a', 4, 'in_progress', '2019-11-22 16:44:04'),
(33, 'rrr', 'r', NULL, 1, 'h', '1', 'c', 5, 'in_progress', '2019-11-22 16:45:20'),
(34, 'j', 'j', NULL, 1, 's', '1', 'C', 5, 'in_progress', '2019-11-22 16:47:38'),
(35, 'y', 'y', NULL, 1, 'S', '1', 'C', 5, 'in_progress', '2019-11-22 16:48:42'),
(36, 'Jasper', 'Verbon', NULL, 1, 'S', '1', 'C', 5, 'complete', '2019-11-24 15:09:44'),
(37, 'Jasper', 'Verbon', 'jasper.verbon@gmail.com', 123, 'Star', '123ZX', 'AA', 5, 'complete', '2019-11-24 15:38:50'),
(38, 'j', 's', 'jasper.verbon@gmail.com', 1, '1', 'a', 'a', 4, 'complete', '2019-11-24 20:15:07'),
(39, 'Jasper', 'Verbon', 'jasper.verbon@gmail.com', 1, 'Havikl', '1243', 'Almere', 8, 'complete', '2019-11-25 13:38:18'),
(40, 'asdf', 'asdf', 'jasper.verbon@gmail.com', 123, 'asdf 1', '1', 'Almere', 5, 'complete', '2019-11-25 14:25:19'),
(41, 'asdf', 'asdf', 'jasper.verbon@gmail.com', 123, 'Street', '12', 'City', 6, 'in_progress', '2019-11-25 14:26:34'),
(42, 'asdf', 'asdf', 'jasper.verbon@gmail.com', 123, 'Hav 17', '1234GZ', 'Almere', 5, 'in_progress', '2019-11-25 14:38:39'),
(43, 'df', 'asdf', 'asdf@gmail. om', 123, 'Havik', '123', 'Almere', 6, 'in_progress', '2019-11-25 14:39:32'),
(44, 'asdf', 'asdf', 'asdf@gmail. om', 123, 'Street', '1234HZ', 'Almere', 5, 'in_progress', '2019-11-25 14:41:23'),
(45, 'asdf', 'asdf', 'jasper.verbon@gmail.com', 123, 'Straat', '1234', 'Almere', 8, 'in_progress', '2019-11-25 14:42:36'),
(46, 'asdf', 'asdf', 'asdf@gmail.com', 123, 'Straat', '1234GZ', 'Almere', 5, 'complete', '2019-11-25 14:44:12'),
(47, 'asdf', 'asdf', 'asdf@gmail. om', 123, 'Street', '123', 'Almere', 6, 'in_progress', '2019-11-25 14:50:45'),
(48, 'asdf', 'asdf', 'asdf@gmail.com', 123, 'Straat', '123', 'Almere', 8, 'in_progress', '2019-11-25 14:51:46'),
(49, 'asdf', 'asdf', 'asdf@gmail.com', 123, 'Havik', '1234', 'Almere', 5, 'in_progress', '2019-11-25 15:31:54'),
(50, 'Jayne', 'Philips', 'jayne@gmail.com', 1234, 'Havik', '1234BZ', 'Almere', 10, 'in_progress', '2019-11-25 15:32:49'),
(51, 'Asdf', 'Asdf', 'jasper.verbon@gmail.com', 123, 'Haviklaan', '1234HZ', 'Almere', 7, 'in_progress', '2019-11-25 15:42:01'),
(52, 'asdf', 'asdf', 'asdf@gmail.com', 1234, 'Straat', '1234ZX', 'Almere', 7, 'in_progress', '2019-11-25 15:45:12'),
(53, 'Asdf', 'Asdf', 'jasper.verbon@gmail.com', 1234, 'Straat', '1234HZ', 'Alemre', 6, 'in_progress', '2019-11-25 15:52:57'),
(54, 'Asdf', 'ASdf', 'jasper.verbon@gmail.com', 1234, 'Havik', '1234HZ', 'Almere', 10, 'in_progress', '2019-11-25 16:07:41'),
(55, 'Jasper', 'Verbon', 'jasper.verbon@gmail.com', 123, 'sdfkh', '123', 'City', 6, 'in_progress', '2019-11-26 23:15:32'),
(56, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 13, 'in_progress', '2019-11-27 09:31:59'),
(57, 'Jasper', 'Verbon', 'jasper.verbon@gmail.com', 123, 'Haviklaan', '123HZ', 'Almere', 8, 'in_progress', '2019-11-27 11:46:24');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pizzas`
--

CREATE TABLE `pizzas` (
  `pizza_id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`pizza_id`, `user_id`, `order_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 2),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 1, 22),
(23, 1, 22),
(24, 1, 23),
(25, 1, 24),
(26, 1, 25),
(27, 1, 26),
(28, 1, 27),
(29, 1, 28),
(30, 1, 29),
(31, 1, 30),
(32, 1, 31),
(33, 1, 32),
(34, 1, 33),
(35, 1, 34),
(36, 1, 35),
(37, 1, 36),
(38, 1, 37),
(39, 1, 38),
(40, 1, 39),
(41, 1, 40),
(42, 1, 41),
(43, 1, 42),
(44, 1, 43),
(45, 1, 44),
(46, 1, 45),
(47, 1, 46),
(48, 1, 47),
(49, 1, 48),
(50, 1, 49),
(51, 1, 50),
(52, 1, 51),
(53, 1, 52),
(54, 1, 53),
(55, 1, 54),
(56, 1, 55),
(57, 1, 56),
(58, 1, 57);

-- --------------------------------------------------------

--
-- Table structure for table `pizza_ingredients`
--

CREATE TABLE `pizza_ingredients` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `allergens` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `units` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` int(10) UNSIGNED DEFAULT NULL,
  `unit_deduction` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizza_ingredients`
--

INSERT INTO `pizza_ingredients` (`id`, `name`, `category`, `description`, `allergens`, `amount`, `units`, `unit_price`, `unit_deduction`, `created_at`, `updated_at`) VALUES
(1, 'Mozzarella', 'Cheese', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(2, 'Cheddar', 'Cheese', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(3, 'Bacon', 'Herb', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(4, 'Basil', 'Sauce', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(5, 'Olives', 'Vegetable', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(6, 'Mushroom', 'Vegetable', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(7, 'Corn', 'Vegetable', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(8, 'Feta', 'Cheese', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(9, 'Chili', 'Herb', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL),
(10, 'Pepperoni', 'Meat', NULL, NULL, 100, 'gram', 1, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pizza_order_ingredients`
--

CREATE TABLE `pizza_order_ingredients` (
  `pizza_id` int(10) UNSIGNED DEFAULT NULL,
  `ingredient_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizza_order_ingredients`
--

INSERT INTO `pizza_order_ingredients` (`pizza_id`, `ingredient_id`) VALUES
(1, 2),
(1, 5),
(1, 10),
(1, 4),
(1, 10),
(1, 2),
(1, 10),
(1, 10),
(1, 5),
(2, 9),
(10, 5),
(13, 10),
(15, 10),
(11, 10),
(1, 10),
(9, 10),
(12, 1),
(11, 10),
(2, 10),
(5, 1),
(14, 10),
(15, 10),
(16, 10),
(16, 10),
(7, 10),
(8, 10),
(10, 7),
(15, 10),
(7, 5),
(4, 9),
(16, 9),
(10, 10),
(11, 10),
(2, 10),
(4, 10),
(10, 4),
(10, 10),
(7, 10),
(2, 10),
(6, 3),
(17, 10),
(16, 4),
(12, 10),
(10, 3),
(6, 1),
(10, 10),
(9, 1),
(17, 8),
(3, 10),
(6, 10),
(9, 10),
(3, 7),
(1, 6),
(10, 8),
(2, 3),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 3),
(1, 3),
(1, 3),
(1, 4),
(1, 4),
(18, 10),
(18, 10),
(18, 10),
(19, 10),
(19, 10),
(19, 10),
(21, 10),
(25, 10),
(27, 10),
(29, 10),
(30, 10),
(31, 10),
(32, 10),
(34, 10),
(35, 10),
(36, 10),
(37, 10),
(38, 10),
(40, 10),
(40, 10),
(40, 10),
(40, 10),
(41, 1),
(42, 10),
(42, 1),
(43, 1),
(44, 1),
(44, 1),
(45, 1),
(46, 1),
(46, 1),
(46, 10),
(46, 10),
(47, 1),
(48, 1),
(48, 1),
(49, 1),
(49, 1),
(49, 10),
(49, 10),
(50, 1),
(51, 1),
(51, 1),
(51, 1),
(51, 10),
(51, 10),
(51, 10),
(52, 1),
(52, 10),
(52, 10),
(53, 1),
(53, 10),
(53, 10),
(54, 1),
(54, 1),
(55, 1),
(55, 1),
(55, 1),
(55, 10),
(55, 10),
(55, 10),
(56, 4),
(56, 5),
(57, 1),
(57, 2),
(57, 5),
(57, 7),
(57, 8),
(57, 9),
(57, 10),
(57, 4),
(57, 3),
(58, 1),
(58, 1),
(58, 3),
(58, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$9mAk8Qqofw84AlwBd93h7.8oBY4e5xs0KEbK06avb87M9eJVWK5Fm', NULL, '2019-11-08 19:22:27', '2019-11-08 19:22:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`pizza_id`),
  ADD KEY `pizzas_user_id_foreign` (`user_id`);

--
-- Indexes for table `pizza_ingredients`
--
ALTER TABLE `pizza_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pizza_ingredients_id_unique` (`id`);

--
-- Indexes for table `pizza_order_ingredients`
--
ALTER TABLE `pizza_order_ingredients`
  ADD KEY `pizza_order_ingredients_ingredient_id_foreign` (`ingredient_id`),
  ADD KEY `pizza_order_ingredients_pizza_id_foreign` (`pizza_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `pizza_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `pizza_ingredients`
--
ALTER TABLE `pizza_ingredients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD CONSTRAINT `pizzas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `pizza_order_ingredients`
--
ALTER TABLE `pizza_order_ingredients`
  ADD CONSTRAINT `pizza_order_ingredients_ingredient_id_foreign` FOREIGN KEY (`ingredient_id`) REFERENCES `pizza_ingredients` (`id`),
  ADD CONSTRAINT `pizza_order_ingredients_pizza_id_foreign` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`pizza_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
