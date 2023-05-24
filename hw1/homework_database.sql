create database homework1;
use homework1;
drop table users;
create table users(
username varchar(50) not null primary key,
nome varchar(50) default null,
cognome varchar(50) default null,
birthday date default null,
password varchar(50) default null,
profile_pic varchar(100) default 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');

create table films(
id_film integer primary key,
nome_film varchar(50),
genere varchar(30),
regista varchar(50),
anno_uscita integer,
descrizione varchar(1000),
foto_film varchar(100));


create table commenti(
id_film integer,
username varchar(50),
testo_commento varchar(1000),
date_comment datetime,
primary key (id_film, username, date_comment),
foreign key (id_film) references films(id_film),
foreign key (username) references users(username));
drop table commenti;
use homework1;
create table likes(
id_film integer,
username varchar(50),
primary key (id_film, username));

insert into users (username, nome, cognome, birthday, password) values ('admin', 'admin', 'root', date('2001-04-04'), 'test123');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('1','Pulp Fiction', 'Giallo/Drammatico','Quentin Tarantino', '1994', 
'Si incrociano le strade di personaggi legati al crimine. Un pugile che mente a un capo banda, due sicari che discutono massaggi ai piedi e panini, una coppia che rapina una caffetteria e altri danno vita a un dramma criminale comico quanto brutale.',
'film_images/pulp_fiction.png');

delete from films where id_film = '1';

use homework1;
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('2', 'Kill Bill', 'azione', 'Quentin Tarantino', '2003', 'La Sposa un tempo apparteneva al team di assassini conosciuto come ‘Deadly Viper Assassination Squad’. Aggredita e lasciata in fin di vita il giorno delle proprie nozze, durante il quale invece lo sposo e altri invitati sono stati uccisi brutalmente per ordine del suo padrino Bill, la Sposa finisce in coma. Dopo cinque anni la donna si risveglia e sotto un ferreo addestramento da parte dei monaci shaolin allo Zen e alle arti marziali, si sente pronta per completare la sua implacabile vendetta e uccidere Bill.', 
'film_images/kill_bill.jpg');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('3', 'Blade Runner 2049', 'Sci-fi/Azione', 'Denis Villeneuve', '2017', 'Un agente della polizia di Los Angeles scopre un segreto sepolto da tempo che potrebbe far precipitare nel caos quello che è rimasto della società. La sua scoperta lo spinge verso la ricerca di Rick Deckard, sparito nel nulla 30 anni prima.', 
'film_images/bladerunner.jpg');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('4', 'Una serie di sfortunati eventi', 'Mystery/Drammatico', 'Mark Hudis', '2017', 'Tre fratelli orfani indagano sulla misteriosa scomparsa dei loro genitori, ma devono fare attenzione al loro malvagio tutore, il conte Olaf, che vuole appropriarsi della loro eredità.', 
'film_images/sfortunati_eventi.jpg');
delete from films where id_film = '4';
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('5');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('6');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('7');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('8');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('9');
insert into films (id_film, nome_film, genere, regista, anno_uscita, descrizione, foto_film) values ('10');




