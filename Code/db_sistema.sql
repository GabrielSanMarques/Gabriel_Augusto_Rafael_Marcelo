-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: db_sistema
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Anotação`
--

DROP TABLE IF EXISTS `Anotação`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Anotação` (
  `codigo` int NOT NULL,
  `texto` varchar(1000) DEFAULT NULL,
  `Lição_codigo` int NOT NULL,
  `User_id` float NOT NULL,
  PRIMARY KEY (`codigo`,`Lição_codigo`,`User_id`),
  KEY `fk_Anotação_Lição1_idx` (`Lição_codigo`),
  KEY `fk_Anotação_User1_idx` (`User_id`),
  CONSTRAINT `fk_Anotação_Lição1` FOREIGN KEY (`Lição_codigo`) REFERENCES `Lição` (`codigo`),
  CONSTRAINT `fk_Anotação_User1` FOREIGN KEY (`User_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anotação`
--

LOCK TABLES `Anotação` WRITE;
/*!40000 ALTER TABLE `Anotação` DISABLE KEYS */;
/*!40000 ALTER TABLE `Anotação` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comentário`
--

DROP TABLE IF EXISTS `Comentário`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comentário` (
  `codigo` int NOT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `texto` varchar(200) NOT NULL,
  `Lição_codigo` int NOT NULL,
  `User_id` float NOT NULL,
  PRIMARY KEY (`codigo`,`Lição_codigo`,`User_id`),
  KEY `fk_Comentário_Lição1_idx` (`Lição_codigo`),
  KEY `fk_Comentário_User1_idx` (`User_id`),
  CONSTRAINT `fk_Comentário_Lição1` FOREIGN KEY (`Lição_codigo`) REFERENCES `Lição` (`codigo`),
  CONSTRAINT `fk_Comentário_User1` FOREIGN KEY (`User_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentário`
--

LOCK TABLES `Comentário` WRITE;
/*!40000 ALTER TABLE `Comentário` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comentário` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Conquistas`
--

DROP TABLE IF EXISTS `Conquistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Conquistas` (
  `codigo` int NOT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  `cristais_bonus` int DEFAULT NULL,
  `xp_bonus` int DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Conquistas`
--

LOCK TABLES `Conquistas` WRITE;
/*!40000 ALTER TABLE `Conquistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Conquistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Conquistas_has_User`
--

DROP TABLE IF EXISTS `Conquistas_has_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Conquistas_has_User` (
  `Conquistas_codigo` int NOT NULL,
  `User_id` float NOT NULL,
  PRIMARY KEY (`Conquistas_codigo`,`User_id`),
  KEY `fk_Conquistas_has_User_User1_idx` (`User_id`),
  KEY `fk_Conquistas_has_User_Conquistas1_idx` (`Conquistas_codigo`),
  CONSTRAINT `fk_Conquistas_has_User_Conquistas1` FOREIGN KEY (`Conquistas_codigo`) REFERENCES `Conquistas` (`codigo`),
  CONSTRAINT `fk_Conquistas_has_User_User1` FOREIGN KEY (`User_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Conquistas_has_User`
--

LOCK TABLES `Conquistas_has_User` WRITE;
/*!40000 ALTER TABLE `Conquistas_has_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Conquistas_has_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exemplo`
--

DROP TABLE IF EXISTS `Exemplo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exemplo` (
  `codigo` int NOT NULL,
  `enunciado` varchar(45) DEFAULT NULL,
  `resposta` varchar(45) DEFAULT NULL,
  `Matéria_codigo` int NOT NULL,
  `Matéria_Seção_codigo` int NOT NULL,
  PRIMARY KEY (`codigo`,`Matéria_codigo`,`Matéria_Seção_codigo`),
  KEY `fk_Exemplo_Matéria1_idx` (`Matéria_codigo`,`Matéria_Seção_codigo`),
  CONSTRAINT `fk_Exemplo_Matéria1` FOREIGN KEY (`Matéria_codigo`, `Matéria_Seção_codigo`) REFERENCES `Matéria` (`codigo`, `Seção_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exemplo`
--

LOCK TABLES `Exemplo` WRITE;
/*!40000 ALTER TABLE `Exemplo` DISABLE KEYS */;
/*!40000 ALTER TABLE `Exemplo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Item`
--

DROP TABLE IF EXISTS `Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Item` (
  `codigo` int NOT NULL,
  `tipo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Item`
--

LOCK TABLES `Item` WRITE;
/*!40000 ALTER TABLE `Item` DISABLE KEYS */;
INSERT INTO `Item` VALUES (1,1,'avatar_robo','avatar de um robô para usos cosmeticos'),(2,1,'avatar_criança1','avatar de um menino branco'),(3,2,'avatar_adulto','avatar de um homem adulto');
/*!40000 ALTER TABLE `Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Item_has_User`
--

DROP TABLE IF EXISTS `Item_has_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Item_has_User` (
  `Item_codigo` int NOT NULL,
  `User_id` float NOT NULL,
  PRIMARY KEY (`Item_codigo`,`User_id`),
  KEY `fk_Item_has_User_User1_idx` (`User_id`),
  KEY `fk_Item_has_User_Item1_idx` (`Item_codigo`),
  CONSTRAINT `fk_Item_has_User_Item1` FOREIGN KEY (`Item_codigo`) REFERENCES `Item` (`codigo`),
  CONSTRAINT `fk_Item_has_User_User1` FOREIGN KEY (`User_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Item_has_User`
--

LOCK TABLES `Item_has_User` WRITE;
/*!40000 ALTER TABLE `Item_has_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Item_has_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lição`
--

DROP TABLE IF EXISTS `Lição`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Lição` (
  `codigo` int NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `Matéria_codigo` int NOT NULL,
  `Matéria_Seção_codigo` int NOT NULL,
  PRIMARY KEY (`codigo`,`Matéria_codigo`,`Matéria_Seção_codigo`),
  KEY `fk_Lição_Matéria1_idx` (`Matéria_codigo`,`Matéria_Seção_codigo`),
  CONSTRAINT `fk_Lição_Matéria1` FOREIGN KEY (`Matéria_codigo`, `Matéria_Seção_codigo`) REFERENCES `Matéria` (`codigo`, `Seção_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lição`
--

LOCK TABLES `Lição` WRITE;
/*!40000 ALTER TABLE `Lição` DISABLE KEYS */;
/*!40000 ALTER TABLE `Lição` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Matéria`
--

DROP TABLE IF EXISTS `Matéria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Matéria` (
  `codigo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `explicacao` varchar(2000) DEFAULT NULL,
  `Seção_codigo` int NOT NULL,
  PRIMARY KEY (`codigo`,`Seção_codigo`),
  KEY `fk_Matéria_Seção_idx` (`Seção_codigo`),
  CONSTRAINT `fk_Matéria_Seção` FOREIGN KEY (`Seção_codigo`) REFERENCES `Seção` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matéria`
--

LOCK TABLES `Matéria` WRITE;
/*!40000 ALTER TABLE `Matéria` DISABLE KEYS */;
/*!40000 ALTER TABLE `Matéria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questão`
--

DROP TABLE IF EXISTS `Questão`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Questão` (
  `codigo` int NOT NULL,
  `enunciado` varchar(45) NOT NULL,
  `resposta_certa` varchar(45) DEFAULT NULL,
  `respostas_erradas` varchar(45) DEFAULT NULL,
  `Lição_codigo` int NOT NULL,
  PRIMARY KEY (`codigo`,`Lição_codigo`),
  KEY `fk_Questão_Lição1_idx` (`Lição_codigo`),
  CONSTRAINT `fk_Questão_Lição1` FOREIGN KEY (`Lição_codigo`) REFERENCES `Lição` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questão`
--

LOCK TABLES `Questão` WRITE;
/*!40000 ALTER TABLE `Questão` DISABLE KEYS */;
/*!40000 ALTER TABLE `Questão` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Seção`
--

DROP TABLE IF EXISTS `Seção`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Seção` (
  `codigo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Seção`
--

LOCK TABLES `Seção` WRITE;
/*!40000 ALTER TABLE `Seção` DISABLE KEYS */;
/*!40000 ALTER TABLE `Seção` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` float NOT NULL,
  `senha` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nivel` int NOT NULL,
  `cristais` int NOT NULL,
  `experiencia` int NOT NULL,
  `cpf` char(11) NOT NULL,
  `street` varchar(45) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `complement` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `phone` char(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'abc','abc@gmail.com',0,0,0,'123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'cba','cba@gmail.com',0,0,0,'456',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-26 17:41:18
