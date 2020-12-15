/*
Navicat MySQL Data Transfer

Source Server         : aaa
Source Server Version : 80021
Source Host           : localhost:3306
Source Database       : nodetest

Target Server Type    : MYSQL
Target Server Version : 80021
File Encoding         : 65001

Date: 2020-12-15 11:24:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for weather
-- ----------------------------
DROP TABLE IF EXISTS `weather`;
CREATE TABLE `weather` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `weather` varchar(255) DEFAULT NULL,
  `maximum_temperature` varchar(255) DEFAULT NULL,
  `minimum_temperature` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `average_temperature` varchar(255) DEFAULT NULL,
  `weather_ico` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of weather
-- ----------------------------
INSERT INTO `weather` VALUES ('1', 'Sydney', 'Light Rain', '<<22℃', '16℃<<', '==19℃==', '/images/f11.png');
INSERT INTO `weather` VALUES ('2', 'Melbourne', 'sunny', '<<19℃', '7℃<<', '==14℃==', '/images/f2.png');
INSERT INTO `weather` VALUES ('3', 'Brisbane', 'ThounderShowers', '<<29℃', '18℃<<', '==25℃==', '/images/f4.png');
