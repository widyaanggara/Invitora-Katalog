import Accordion, { AccordionItem } from "./ui/Accordion"

const Faq = () => {
  return (
    <section id='faq' className='h-full py-24 w-screen bg-white'>
        <div className='container mx-auto w-[90%] lg:w-[85%] 2xl:w-[70%]'>
          <div className="text-center text-3xl font-bold">
            Pertanyaan yang Sering <span className="text-[#C0993A]">Diajukan</span>
          </div>
          <div className='text-base text-gray-700 text-center mt-3 max-w-[32rem] mx-auto'>
            Temukan solusi cepat untuk semua pertanyaan Anda di sini.        
          </div>

          <div className="mt-8 lg:w-[90%] mx-auto">
            <Accordion>
              <AccordionItem value="1" trigger="Bagaimana cara memesan undangan digital?">
                Memesan undangan digital dapat dilakukan dengan langkah-langkah berikut:  
                <ul className="list-disc pl-8">
                  <li>Hubungi kami melalui WhatsApp.</li>
                  <li>Pilih paket undangan sesuai keinginan Anda.</li>
                  <li>Isi format pemesanan yang kami berikan, termasuk nama, foto, dan detail lainnya.</li>
                  <li>Tunggu proses pengerjaan sekitar 2-3 hari.</li>
                  <li>Lakukan pembayaran setelah undangan selesai.</li>
                  <li>Undangan siap dibagikan kepada tamu.</li>
                </ul>            
              </AccordionItem>
              <AccordionItem value="2" trigger="Berapa lama proses pembuatan undangan digital?">
                Pengerjaan undangan digital memerlukan waktu sekitar 2-3 hari setelah semua data yang diperlukan tersedia.              
              </AccordionItem>
              <AccordionItem value="3" trigger=" Apakah undangan bisa diakses selamanya?">
                Undangan aktif minimal 3 bulan. Jika ingin lebih lama, bisa request perpanjangan hosting.
              </AccordionItem>
              <AccordionItem value="4" trigger="Apakah undangan bisa direvisi setelah selesai dikerjakan?">
                Tentu, revisi undangan dapat dilakukan kapan saja dan tanpa dikenakan biaya tambahan.
              </AccordionItem>
              <AccordionItem value="5" trigger="Apakah ada biaya tambahan selain harga paket?">
                Tidak ada biaya tambahan, kecuali jika Anda meminta fitur khusus di luar paket yang dipilih.
              </AccordionItem>
              <AccordionItem value="6" trigger="Apakah undangan digital bisa diakses di semua perangkat?">
                Ya, undangan bisa dibuka di HP, tablet, maupun komputer tanpa perlu aplikasi tambahan.
              </AccordionItem>
            </Accordion>
          </div>

        </div>
    </section>
  )
}

export default Faq