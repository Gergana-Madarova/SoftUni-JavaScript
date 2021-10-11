-- SQL river formating

-- CREATE DATABASE, USE DATABASE and CREATE TABLE and set PK
CREATE DATABASE [Minions]

Go

USE				[Minions]

Go

	-- Set PK on table creation 
CREATE TABLE	[Minions]
				(
				[Id]	INT			PRIMARY KEY	 NOT NULL,
				[Name]	NVARCHAR(50)			 NOT NULL,
				[Age]	INT
				)

Go

	-- Create table and add PK constraint
CREATE TABLE	[Towns]
				(
			--Id is NOT NULL to add later constraint PK, without DROP table
				[Id]	INT			 NOT NULL,
				[Name]	NVARCHAR(50),
				)

GO

ALTER TABLE		[Towns] 
ADD CONSTRAINT	PK_MinionsId PRIMARY KEY (Id)

GO



--ALTER TABLE - change column to NOT NULL, ADD new column and set FK

ALTER TABLE	 [Towns] 
ALTER COLUMN [Name]	  NVARCHAR(50) NOT NULL

GO

ALTER TABLE	[Minions] 
ADD			[TownId]  INT NOT NULL
GO

ALTER TABLE		[Minions] 
ADD CONSTRAINT  [FK_TownId] FOREIGN KEY ([TownId]) REFERENCES [Towns]([Id])

GO

INSERT INTO	[Towns] ([Id], [Name]) VALUES 
(1, 'Sofia'),
(2, 'Plovdiv'),
(3, 'Varna')

GO


--Insert and Delete all the data from the table and check all of this with SELECT
SELECT * FROM [Towns]

GO

INSERT INTO [Minions] ([Id], [Name], [Age], [TownId]) VALUES 
(1, 'Kevin', 22, 1),
(2, 'Bob', 15, 3),
(3, 'Steward', NULL, 2)

GO

SELECT * FROM [Minions]

 GO
 
 TRUNCATE TABLE [Minions]

 GO


 --Drop All Tables
 DROP TABLE [Minions]
 DROP TABLE [Towns]
