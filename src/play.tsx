import "./style/play.css";

import { Button, Card, Container } from "@mui/material";
import { FormEvent, useState } from "react";

function Play() {
  const [color, setColor] = useState("");
  const [pile, setPile] = useState(0);
  const [valueBtn, setValueBtn] = useState("");
  const [useCase, setUseCase] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted values:", { color, pile, valueBtn });
    setUseCase(
      pile <= 1 && color === "red" && valueBtn === "exploser"
        ? "Relâcher le bouton immédiatement"
        : ""
    );
  };

  return (
    <div className="container">
      <h1>Nobody Explodes</h1>
      <Container>
        <Card sx={{ minWidth: 275 }}>
          <form onSubmit={handleSubmit}>
            <p>Couleur du bouton</p>
            <input
              type="text"
              name="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
            <p>Valeur du bouton</p>
            <input
              type="text"
              name="valueBtn"
              value={valueBtn}
              onChange={(event) => {
                setValueBtn(event.target.value);
              }}
            />
            <p>Nombre de piles :</p>
            <input
              type="number"
              name="pile"
              value={pile}
              onChange={(event) => {
                const newPile = parseInt(event.target.value);
                setPile(newPile);
              }}
            />
            <Button type="submit" variant="contained">
              Valider
            </Button>
          </form>
          {useCase && <p>{useCase}</p>}
        </Card>
      </Container>
    </div>
  );
}

export default Play;
