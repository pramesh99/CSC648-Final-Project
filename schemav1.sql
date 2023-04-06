-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gatorGrubDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gatorGrubDB` ;

-- -----------------------------------------------------
-- Schema gatorGrubDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gatorGrubDB` DEFAULT CHARACTER SET utf8 ;
USE `gatorGrubDB` ;

-- -----------------------------------------------------
-- Table `gatorGrubDB`.`SFSUCustomer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`SFSUCustomer` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`SFSUCustomer` (
  `SFSUCustomerID` INT NOT NULL AUTO_INCREMENT,
  `SFSUCustomerName` VARCHAR(45) NOT NULL,
  `SFSUCustomerEmail` VARCHAR(45) NOT NULL,
  `SFSUCustomerPhone` VARCHAR(45) NOT NULL,
  `SFSUCustomerPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`SFSUCustomerID`),
  UNIQUE INDEX `SFSUCustomerEmail_UNIQUE` (`SFSUCustomerEmail` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`Driver`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`Driver` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`Driver` (
  `DriverID` INT NOT NULL AUTO_INCREMENT,
  `DriverName` VARCHAR(45) NOT NULL,
  `DriverEmail` VARCHAR(45) NOT NULL,
  `DriverPhone` VARCHAR(45) NOT NULL,
  `DriverPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`DriverID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`RestaurantOwner`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`RestaurantOwner` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`RestaurantOwner` (
  `RestaurantOwnerID` INT NOT NULL AUTO_INCREMENT,
  `RestaurantOwnerName` VARCHAR(45) NOT NULL,
  `RestaurantOwnerEmail` VARCHAR(45) NOT NULL,
  `RestaurantOwnerPhone` VARCHAR(45) NOT NULL,
  `RestaurantOwnerPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`RestaurantOwnerID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`Restaurant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`Restaurant` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`Restaurant` (
  `RestaurantID` INT NOT NULL AUTO_INCREMENT,
  `RestaurantOwnerID` INT NOT NULL,
  `RestaurantRegistered` TINYINT ZEROFILL NULL,
  `RestaurantName` VARCHAR(45) NOT NULL,
  `RestaurantPhone` VARCHAR(45) NOT NULL,
  `RestaurantPassword` VARCHAR(45) NOT NULL,
  `RestaurantAddress` VARCHAR(75) NOT NULL,
  `RestaurantCuisine` VARCHAR(45) NOT NULL,
  `RestaurantPriceTier` INT NOT NULL,
  `RestaurantHours` VARCHAR(45) NOT NULL,
  `RestaurantPrepTime` INT NOT NULL,
  PRIMARY KEY (`RestaurantID`),
  INDEX `r_owner_fk_idx` (`RestaurantOwnerID` ASC) VISIBLE,
  UNIQUE INDEX `RestaurantAddress_UNIQUE` (`RestaurantAddress` ASC) VISIBLE,
  CONSTRAINT `r_owner_fk`
    FOREIGN KEY (`RestaurantOwnerID`)
    REFERENCES `gatorGrubDB`.`RestaurantOwner` (`RestaurantOwnerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`RestaurantMenu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`RestaurantMenu` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`RestaurantMenu` (
  `RestaurantMenuID` INT NOT NULL AUTO_INCREMENT,
  `rm_RestaurantID` INT NOT NULL,
  PRIMARY KEY (`RestaurantMenuID`),
  INDEX `r_menu_fk_idx` (`rm_RestaurantID` ASC) VISIBLE,
  CONSTRAINT `rest_menu_fk`
    FOREIGN KEY (`rm_RestaurantID`)
    REFERENCES `gatorGrubDB`.`Restaurant` (`RestaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`MenuItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`MenuItem` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`MenuItem` (
  `MenuItemID` INT NOT NULL AUTO_INCREMENT,
  `RestaurantMenuID` INT NOT NULL,
  `MenuItemName` VARCHAR(45) NOT NULL,
  `MenuItemPicture` VARCHAR(45) NOT NULL,
  `MenuItemPrice` DECIMAL(5,2) NOT NULL,
  `MenuItemType` VARCHAR(45) NOT NULL,
  `MenuItemDescription` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`MenuItemID`),
  INDEX `r_menu_fk_idx` (`RestaurantMenuID` ASC) VISIBLE,
  CONSTRAINT `r_menu_fk`
    FOREIGN KEY (`RestaurantMenuID`)
    REFERENCES `gatorGrubDB`.`RestaurantMenu` (`RestaurantMenuID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gatorGrubDB`.`Order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gatorGrubDB`.`Order` ;

CREATE TABLE IF NOT EXISTS `gatorGrubDB`.`Order` (
  `OrderID` INT NOT NULL AUTO_INCREMENT,
  `CustomerID` INT NOT NULL,
  `DriverID` INT NOT NULL,
  `RestaurantID` INT NOT NULL,
  `OrderTime` VARCHAR(45) NOT NULL,
  `DeliveryTIme` VARCHAR(45) NOT NULL,
  `DeliveryAddress` VARCHAR(75) NOT NULL,
  `AdditionalNotes` VARCHAR(102) NOT NULL,
  `OrderDiscounts` DECIMAL(6,2) ZEROFILL NULL,
  `OrderPrice` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`OrderID`),
  INDEX `order_cust_id_fk_idx` (`CustomerID` ASC) VISIBLE,
  INDEX `order_driver_id_fk_idx` (`DriverID` ASC) VISIBLE,
  INDEX `order_rest_id_fk_idx` (`RestaurantID` ASC) VISIBLE,
  CONSTRAINT `order_cust_id_fk`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `gatorGrubDB`.`SFSUCustomer` (`SFSUCustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_driver_id_fk`
    FOREIGN KEY (`DriverID`)
    REFERENCES `gatorGrubDB`.`Driver` (`DriverID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_rest_id_fk`
    FOREIGN KEY (`RestaurantID`)
    REFERENCES `gatorGrubDB`.`Restaurant` (`RestaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
