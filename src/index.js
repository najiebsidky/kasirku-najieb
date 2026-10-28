console.log("Welcome Al Hakim");
const namaProduk = "Mintak Goreng Sania 2 Liter";
const hargaSatuan = "18500";
const jumlahBeli = 2;

console.log(
  `Nama Produk adalah :${namaProduk} Total adalah : ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")}`,
);

// .........OBJECT.........
const ProdukWarung = {
  id: 1,
  nama: "Pecel Lele",
  kategori: "Makanan",
  hargaBeli: 9000,
  hargaJual: 14000,
  stock: 3,
  batasMin: 5,
};
console.log(`
    ID PRODUCT: SKU-${ProdukWarung.id}
    Nama Product: ${ProdukWarung.nama}
    Kategori: ${ProdukWarung.kategori}
    Harga Beli: Rp. ${ProdukWarung.hargaBeli.toLocaleString("id-ID")}
    Harga Jual: Rp. ${ProdukWarung.hargaJual.toLocaleString("id-ID")}
    stock: ${ProdukWarung.stock}`);

// .............OBJECT DENGAN KONDISI.............
console.log(`
    Status: ${ProdukWarung.stock < ProdukWarung.batasMin ? "Restock" : "Tersedia"}
    `);
// .............LOOPING ARRAY OBJECT.............
const daftarProduk = [
  { nama: "Telor", harga: 25000, stock: 15 },
  { nama: "Beras", harga: 14500, stock: 25 },
  { nama: "Minyak Ros Brand", harga: 39000, stock: 45 },
];

for (const product of daftarProduk) {
  console.log(`
            Nama Produk: ${product.nama},
            Harga: ${product.harga},
            Stock: ${product.stock}`);
}
console.log(daftarProduk[1]);
//...... FUNCTION.........
function hargaMargin(hargaJual, hargaBeli) {
  return hargaJual - hargaBeli;
}
function formatRupiah(angka) {
  return `Rp. ${angka.toLocaleString("id-ID")}`;
}
const product = {
  nama: "Nasi Uduk",
  hargaJual: 25000,
  hargaBeli: 15000,
};
console.log(formatRupiah(product.hargaBeli));
console.log(formatRupiah(product.hargaJual));
console.log(hargaMargin(product.hargaJual, product.hargaBeli));

// const namaToko = "Toko Berkah Warung (KasirKu)";
// const namaKasir = "Mbak Sri";

// const produk = [
//   {
//     nama: "Minyak Goreng Sania 2L",
//     hargaJual: 37000,
//     margin: 4000,
//     stok: 10,
//   },
//   {
//     nama: "Beras Ramos 5kg",
//     hargaJual: 72000,
//     margin: 7000,
//     stok: 15,
//   },
//   {
//     nama: "Gula Pasir 1kg",
//     hargaJual: 16000,
//     margin: 2000,
//     stok: 3,
//   },
// ];

// function formatRupiah(angka) {
//   return `Rp. ${angka.toLocaleString("id-ID")}`;
// }

// console.log("==============================================");
// console.log(" LAPORAN HARIAN POS: " + namaToko);
// console.log(" Kasir Bertugas: " + namaKasir);
// console.log("==============================================");

// let totalAset = 0;
// let barangPerluRestock = 0;

// produk.forEach(function (item) {
//   const nilaiStok = item.hargaJual * item.stok;
//   totalAset += nilaiStok;

//   const status = item.stok <= 3 ? "⚠ Perlu Restock" : "✓ Aman";

//   if (item.stok <= 3) {
//     barangPerluRestock++;
//   }

//   console.log("----------------------------------------------");
//   console.log("Produk       : " + item.nama);
//   console.log("Harga Jual   : " + formatRupiah(item.hargaJual));
//   console.log("Margin       : " + formatRupiah(item.margin));
//   console.log("Stok Gudang  : " + item.stok + " unit");
//   console.log("Status       : " + status);
// });

// console.log("----------------------------------------------");
// console.log("Total Estimasi Aset Toko : " + formatRupiah(totalAset));
// console.log("Barang Butuh Perhatian   : " + barangPerluRestock + " item");
// console.log("==============================================");
