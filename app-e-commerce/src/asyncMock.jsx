    const productos = [
        {
         id: '1',
         name: 'GUITARRA ACUSTICA PARQUER CUSTOM',
         description:'Guitarra Acustica 41″ Caja: Tilo. Tapa y Aro: Abeto. Diapasón: Arce. Trastes de Cuproniquel. Color Marrón Claro con Corte',
         price:'$ 96.178',
         pictureUrl:'guitarra1.jpg',
         category: 'guitarrasAcusticas'
        },
        {
         id: '2',
         name: 'GUITARRA ACUSTICA PARQUER TIPO APX',
         description:'Color Roja. Caja de Tilo, Mango Rosewood. Media Caja ( Mini Jumbo) con Corte. Guitarra Acustica Construida Al Estilo Apx de Yamaha, Muy Comoda Para Tocar con Su Particular Forma y Corte Al Estilo Media Caja',
         price:'$ 150.204',
         pictureUrl:'...',
         category: 'guitarrasAcusticas'
        },
        {
         id: '3',
         name: 'BAJO ELECTRICO PARQUER JAZZ BASS',
         description:'Construccion: Atornillada. Tipo Ibanez Micrófono Tipo Combinado Jazz y Precision. Trastera: Palo de Rosa de 2, Mango: Arce, Cuerpo: Tilo. Color: Bordo',
         price:'$ 224.279',
         pictureUrl:'...',
         category: 'bajosElectricos'
        },
        {
         id: '4',
         name: 'BAJO ELECTROACÚSTICO PARQUER NATURAL',
         description:'Bajo Acustico con Corte Frente: Pino Abeto Aros: Caoba Fondo: Caoba (En Dos Partes) Mango: Cedro Diapasón: Palo de Rosa Escala: 22 Trastes Trastes: Bronce Clavijas: Cromadas con Equializador',
         price:'$ 332.564',
         pictureUrl:'...',
         category: 'bajosAcusticos'
        },
        {
         id: '5',
         name: 'BATERÍA PEARL',
         description:'Batería Pearl 5 Cuerpos Clear Birch 22/1/12/16 14×5,5',
         price:'$ 761.701',
         pictureUrl:'...',
         category: 'bateriasAcusticas'
        },
        {
         id: '6',
         name: 'BATERÍA ELECTRÓNICA PARQUER SKD203',
         description:'Bateria Electrã³Nica Parquer Skd23. Cuerpos de Mesh (Malla) Para Un Mejor Rebote y Precision. Soportes de Metal Para Los Platillos. Goma de Excelente Calidad y Durabilidad en Los Cuerpos. Cuenta con Un Cerebro Principal, El Cual Cuenta con Pantalla Lcd de 128 x 64 Caracteres, 458 Voces de Precusion de Alta Calidad, 26 Kits de Baterias Preestablecidos + 15 Kits de Baterias Definidos Por El Usuario, 2 Canciones de Demostracion. Entrada Auxiliar, Salida de Linea, Salida de Auriculares, Interfaz USB (USB a Dispositivo), Entrada / Salida Midi, Funcionalidad de Grabacion y Reproduccion. Sensibilidad Ajustable.',
         price:'$ 825.312',
         pictureUrl:'...',
         category: 'bateriasElectronicas'
        },
        {
          id: '7',
          name: 'PIANO ELÉCTRICO DIGITAL ROLAND FP30X 88 TECLAS',
          description:'Piano ElectRico Roland Fp3x Bluetooth Negro',
          price:'$ 1.264.160',
          pictureUrl:'...',
          category: 'pianos'
         },
         {
          id: '8',
          name: 'CONTROLADOR MIDI PARQUER 61 TECLAS',
          description:'B61 Teclas con Toque Inicial. Rueda Curva de Tono y Rueda de Modulación. 8 Botones Asignables, Las Funciones Predefinidas Incluyen: Cutoff / Resonance / Attack / Release / Pan / Reverb / Chorus / Tempo. 9 Faders Asignables (Deslizadores), Las Funciones Predefinidas Incluyen El Volumen Del Canal (Chn1-Chn16) y El Volumen Maestro.',
          price:'$ 356.352',
          pictureUrl:'midi1.jpg',
          category: 'controladoresMidi'
         } 
      ]

 export const cargarProductos = ()=>{
     return new Promise((resolve, reject)=>{
       setTimeout(() => {
           resolve(productos)
       }, 1500);

     })
  }

  export const getProductById = (productoId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=>prod.id === productoId))
        },1500)
    })

  }

  export const getProductByCategory = (productoCategoria)=>{

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(productos.filter((prod) => prod.category === productoCategoria))
      })
    })

  }





