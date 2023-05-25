## COMMANDE POUR CONVERTIR UN FICHIER SQL VERS SQLITE : 

        cat monfichier.sql | sqlite3 database.sqlite


## SCHEMA : 
**DBML (Database Markup Language)** is an open-source DSL language designed to define and document database schemas and structures. It is designed to be simple, consistent and highly-readable.

users {
	id int pk
	username varchar
	password varchar
	role_id int > roles.id
	nom varchar
	prenom varchar
	email varchar
	phone varchar
	presentation varchar
	date_register datetime def(CURRENT_TIMESTAMP)

}

entreprise {
	id int pk
	nom varchar
	description varchar
    date_created datetime def(CURRENT_TIMESTAMP)

}

offre {
	id int pk
	entreprise_id int > entreprise.id
	titre varchar
	descriptif varchar
	ville varchar
}

roles {
	id int pk
	label varchar
}

users_entreprise {
	user_id int > users.id
	entreprise_id int > entreprise.id
}

users_apply {
	offre_id int > offre.id
	user_id int > users.id
	date_apply datetime def(CURRENT_TIMESTAMP)
}

