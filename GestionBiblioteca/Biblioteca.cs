using System.Collections.Generic;
namespace GestionBiblioteca
{
    public class Biblioteca
    {
    private string nombre;
    private List<Libro> libros;
    private decimal facturacionDia;
    private int cantidadLibros;  
public Biblioteca(string nombre)
    {
        this.nombre = nombre;
        this.libros = new List<Libro>();
        this.facturacionDia = 0;
        this.cantidadLibros = 0;

    }
}
}
