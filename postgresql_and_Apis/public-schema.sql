--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ElevationData; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ElevationData" (
    "Id" integer NOT NULL,
    "Lattitude" double precision NOT NULL,
    "Longitude" double precision NOT NULL,
    "Resolution" double precision NOT NULL,
    "ImageName" character varying(20) NOT NULL,
    "SaferLattitude" double precision,
    "SaferLongitude" double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: ElevationData_Id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."ElevationData_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ElevationData_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."ElevationData_Id_seq" OWNED BY public."ElevationData"."Id";


--
-- Name: SatelliteData; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SatelliteData" (
    "Id" integer NOT NULL,
    "NELattitude" double precision NOT NULL,
    "NELongitude" double precision NOT NULL,
    "NWLattitude" double precision NOT NULL,
    "NWLongitude" double precision NOT NULL,
    "SELattitude" double precision NOT NULL,
    "SELongitude" double precision NOT NULL,
    "SWLattitude" double precision NOT NULL,
    "SWLongitude" double precision NOT NULL,
    "ImageName" character varying(20) NOT NULL,
    "TimeStamp" character varying(20) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: SatelliteData_Id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."SatelliteData_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: SatelliteData_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."SatelliteData_Id_seq" OWNED BY public."SatelliteData"."Id";


--
-- Name: Id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ElevationData" ALTER COLUMN "Id" SET DEFAULT nextval('public."ElevationData_Id_seq"'::regclass);


--
-- Name: Id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SatelliteData" ALTER COLUMN "Id" SET DEFAULT nextval('public."SatelliteData_Id_seq"'::regclass);


--
-- Name: ElevationData_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ElevationData"
    ADD CONSTRAINT "ElevationData_pkey" PRIMARY KEY ("Id");


--
-- Name: SatelliteData_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SatelliteData"
    ADD CONSTRAINT "SatelliteData_pkey" PRIMARY KEY ("Id");


--
-- PostgreSQL database dump complete
--

