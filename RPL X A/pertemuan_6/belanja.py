product = {
    "beras": 18000,
    "gula": 12500,
    "telur": 35000,
    "susu": 19000,
}

def belanja():
    print("Selamat datang, selamat berbelanja")
    print("Berikut adalah daftar barang yang tersedia:")
    for barang, harga in product.items():
        print(f"{barang}: Rp{harga} per kg") 
        
    total_belanja = 0
    while True:
        barang_dipilih = input("Masukkan nama barang yang ingin anda beli(atau 'selesai' untuk selesai)").lower()
        if barang_dipilih.lower() == 'selesai':
             break
        if barang_dipilih not in product:
            print("Maaf, barang tersebut tidak tersedia")
            continue
        jumlah = float(input(f"Berapa kg {barang_dipilih} yang anda inginkan?"))
        total_belanja += product[barang_dipilih] * jumlah
    print(f"total Belanja anda adalah: Rp{total_belanja}")
         
belanja()       
            