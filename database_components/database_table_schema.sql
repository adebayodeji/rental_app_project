-- Database: db_rental

-- DROP DATABASE IF EXISTS db_rental;

CREATE DATABASE db_rental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE db_rental
    IS 'rental app development project ';


----Script for Sequence-------------
-- SEQUENCE: public.tbl_house_mate_housemate_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_house_mate_housemate_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_house_mate_housemate_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_house_mate.housemate_id;

ALTER SEQUENCE public.tbl_house_mate_housemate_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_house_mate_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_house_mate_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_house_mate_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_house_mate.user_id;

ALTER SEQUENCE public.tbl_house_mate_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_maintenance_issue_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_maintenance_issue_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_maintenance_issue_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_maintenance.issue_id;

ALTER SEQUENCE public.tbl_maintenance_issue_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_maintenance_property_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_maintenance_property_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_maintenance_property_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_maintenance.property_id;

ALTER SEQUENCE public.tbl_maintenance_property_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_property_property_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_property_property_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_property_property_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_property.property_id;

ALTER SEQUENCE public.tbl_property_property_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_property_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_property_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_property_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_property.user_id;

ALTER SEQUENCE public.tbl_property_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_rental_agreement_agreement_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_rental_agreement_agreement_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_rental_agreement_agreement_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_rental_agreement.agreement_id;

ALTER SEQUENCE public.tbl_rental_agreement_agreement_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_rental_agreement_property_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_rental_agreement_property_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_rental_agreement_property_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_rental_agreement.property_id;

ALTER SEQUENCE public.tbl_rental_agreement_property_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_rental_agreement_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_rental_agreement_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_rental_agreement_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_rental_agreement.user_id;

ALTER SEQUENCE public.tbl_rental_agreement_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_support_support_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_support_support_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_support_support_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_support.support_id;

ALTER SEQUENCE public.tbl_support_support_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_support_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_support_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_support_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_support.user_id;

ALTER SEQUENCE public.tbl_support_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_user_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_user_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_user_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_user.user_id;

ALTER SEQUENCE public.tbl_user_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_verification_user_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_verification_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_verification_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_verification.user_id;

ALTER SEQUENCE public.tbl_verification_user_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.tbl_verification_verification_id_seq

-- DROP SEQUENCE IF EXISTS public.tbl_verification_verification_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.tbl_verification_verification_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY tbl_verification.verification_id;

ALTER SEQUENCE public.tbl_verification_verification_id_seq
    OWNER TO postgres;

	
	
--------------Script for Tbl_user---------------------

-- Table: public.tbl_user

-- DROP TABLE IF EXISTS public.tbl_user;

CREATE TABLE IF NOT EXISTS public.tbl_user
(
    user_id integer NOT NULL DEFAULT nextval('tbl_user_user_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    contact character varying(255) COLLATE pg_catalog."default",
    academic_institution character varying(255) COLLATE pg_catalog."default",
    address character varying(255) COLLATE pg_catalog."default",
    picture bytea,
    user_type character varying(255) COLLATE pg_catalog."default",
    status character varying(255) COLLATE pg_catalog."default",
    rating character varying(255) COLLATE pg_catalog."default",
    "timestamp" time without time zone,
    CONSTRAINT tbl_user_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_user
    OWNER to postgres;
	
------Script for tbl_property-----------

-- Table: public.tbl_property

-- DROP TABLE IF EXISTS public.tbl_property;

CREATE TABLE IF NOT EXISTS public.tbl_property
(
    property_id integer NOT NULL DEFAULT nextval('tbl_property_property_id_seq'::regclass),
    property_name character varying(255) COLLATE pg_catalog."default",
    property_address character varying(255) COLLATE pg_catalog."default",
    property_type character varying(255) COLLATE pg_catalog."default",
    rental_price character varying(255) COLLATE pg_catalog."default",
    property_details character varying(255) COLLATE pg_catalog."default",
    rental_terms character varying(255) COLLATE pg_catalog."default",
    property_image bytea,
    additional_bills character varying(255) COLLATE pg_catalog."default",
    not_allowed character varying(255) COLLATE pg_catalog."default",
    availability character varying(255) COLLATE pg_catalog."default",
    user_id integer NOT NULL DEFAULT nextval('tbl_property_user_id_seq'::regclass),
    "timestamp" time without time zone,
    CONSTRAINT tbl_property_pkey PRIMARY KEY (property_id),
    CONSTRAINT user_id_foreign_key FOREIGN KEY (user_id)
        REFERENCES public.tbl_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_property
    OWNER to postgres;
	
-------Script House_Mate-----------------

-- Table: public.tbl_house_mate

-- DROP TABLE IF EXISTS public.tbl_house_mate;

CREATE TABLE IF NOT EXISTS public.tbl_house_mate
(
    housemate_id integer NOT NULL DEFAULT nextval('tbl_house_mate_housemate_id_seq'::regclass),
    user_id integer NOT NULL DEFAULT nextval('tbl_house_mate_user_id_seq'::regclass),
    preferences character varying(255) COLLATE pg_catalog."default",
    agreement_details character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT tbl_house_mate_pkey PRIMARY KEY (housemate_id),
    CONSTRAINT user_id_foreign_key FOREIGN KEY (user_id)
        REFERENCES public.tbl_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_house_mate
    OWNER to postgres;
	
------Tbl_Maintenance------------------------

-- Table: public.tbl_maintenance

-- DROP TABLE IF EXISTS public.tbl_maintenance;

CREATE TABLE IF NOT EXISTS public.tbl_maintenance
(
    issue_id integer NOT NULL DEFAULT nextval('tbl_maintenance_issue_id_seq'::regclass),
    property_id integer NOT NULL DEFAULT nextval('tbl_maintenance_property_id_seq'::regclass),
    description character varying COLLATE pg_catalog."default",
    status character varying COLLATE pg_catalog."default",
    CONSTRAINT tbl_maintenance_pkey PRIMARY KEY (issue_id),
    CONSTRAINT property_id_foreign_key FOREIGN KEY (property_id)
        REFERENCES public.tbl_property (property_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_maintenance
    OWNER to postgres;
	
-------Script Rental Agreement-------

-- Table: public.tbl_rental_agreement

-- DROP TABLE IF EXISTS public.tbl_rental_agreement;

CREATE TABLE IF NOT EXISTS public.tbl_rental_agreement
(
    agreement_id integer NOT NULL DEFAULT nextval('tbl_rental_agreement_agreement_id_seq'::regclass),
    user_id integer NOT NULL DEFAULT nextval('tbl_rental_agreement_user_id_seq'::regclass),
    property_id integer NOT NULL DEFAULT nextval('tbl_rental_agreement_property_id_seq'::regclass),
    invoices character varying COLLATE pg_catalog."default",
    CONSTRAINT tbl_rental_agreement_pkey PRIMARY KEY (agreement_id),
    CONSTRAINT property_id_foreign_key FOREIGN KEY (property_id)
        REFERENCES public.tbl_property (property_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id_foreign_key FOREIGN KEY (user_id)
        REFERENCES public.tbl_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_rental_agreement
    OWNER to postgres;
	
-------Script tbl Support----------------------

-- Table: public.tbl_support

-- DROP TABLE IF EXISTS public.tbl_support;

CREATE TABLE IF NOT EXISTS public.tbl_support
(
    support_id integer NOT NULL DEFAULT nextval('tbl_support_support_id_seq'::regclass),
    user_id integer NOT NULL DEFAULT nextval('tbl_support_user_id_seq'::regclass),
    issue_details character varying(255) COLLATE pg_catalog."default",
    resolution character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT tbl_support_pkey PRIMARY KEY (support_id),
    CONSTRAINT user_id_foreign_key FOREIGN KEY (user_id)
        REFERENCES public.tbl_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_support
    OWNER to postgres;
	
-------Script Tbl Verification--------

-- Table: public.tbl_verification

-- DROP TABLE IF EXISTS public.tbl_verification;

CREATE TABLE IF NOT EXISTS public.tbl_verification
(
    verification_id integer NOT NULL DEFAULT nextval('tbl_verification_verification_id_seq'::regclass),
    user_id integer NOT NULL DEFAULT nextval('tbl_verification_user_id_seq'::regclass),
    verified_status character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT tbl_verification_pkey PRIMARY KEY (verification_id),
    CONSTRAINT user_id_foreign_key FOREIGN KEY (user_id)
        REFERENCES public.tbl_user (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tbl_verification
    OWNER to postgres;
	

	

