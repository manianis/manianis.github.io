program prog01;
{ Déclarations }
const
  PI = 3.14159265;
  QPM2 = 6; { 6 m²/Kg }
var
  n : integer;
  l, h : real;
  sp, qp : real;
begin
  { Entrée des données }
  Write('Largeur de la porte : ');
  Readln(l);

  Write('Hauteur de la porte : ');
  Readln(h);

  Write('Donner le nbre de portes : ');
  Readln(n);

  { Traitements }
  sp := (l * (h - l)) + PI * L * L / 4;
  qp := (n * 2 * sp) / QPM2;

  { Affichage }
  Writeln('Quantité de peinture requise : ', qp:5:1, 'Kg');
  Readln;
end.

