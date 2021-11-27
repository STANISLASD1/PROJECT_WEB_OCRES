//import { useState, useEffect } from 'react';
import * as React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/FooterStyles";
import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export default function Footer() {


    return (
        <div>
            <Card>
                <CardContent>
                <Box>
      <h2 style={{ color: "Black", textAlign: "center", marginTop: "-50px" }}>
        Information sur notre Site
      </h2>
      <Container>
        <Row>
           <Column>
            <Heading>Times To Ski</Heading>
            <FooterLink href="#">Condition/Politique</FooterLink>
            <FooterLink href="#">France</FooterLink>
            <FooterLink href="#">Tignes</FooterLink>
          </Column>
          <Column>
            <Heading>Contactez-nous</Heading>
            <FooterLink href="#">Messenger</FooterLink>

          </Column>
          <Column>
            <Heading>Newletter</Heading>
            <FooterLink href="#">S'inscrire</FooterLink>
          </Column>
         
          <Column>
            <Heading>Réseaux sociaux</Heading>
            <FooterLink href="https://www.facebook.com">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
                </CardContent>
            </Card>

        </div>
    );
}