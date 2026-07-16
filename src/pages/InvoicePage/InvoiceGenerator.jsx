import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { Plus, Trash2, Download, Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Primary Logo.png";
import logoSecondary from "../../assets/images/Secondary Logo.png";

const InvoiceGenerator = () => {
  const invoiceRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // State: Sender Info
  const [sender, setSender] = useState({
    name: "Asyam Rafif Aubin Fawwaz",
    address: "Jember, Jawa Timur",
    phone: "0812-4917-5576",
    email: "motrackofficial@gmail.com",
  });

  // State: Invoice Details
  const [customer, setCustomer] = useState("Customer");
  const [invoiceCategory, setInvoiceCategory] = useState("CPY");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0]);
  const [invoiceCounter, setInvoiceCounter] = useState(1);

  // State: Items
  const [items, setItems] = useState([
    { id: 1, description: "Jasa Penulisan & Penataan Laporan PKL", price: 150000, qty: 1 },
  ]);

  // State: Payment
  const [payment, setPayment] = useState({
    method: "METODE PEMBAYARAN:",
    details: "DANA/GOPAY: 0812-4917-5576",
    accountName: "A.n: ASYAM RAFIF AUBIN FAWWAZ",
    instruction: "*Mohon lampirkan bukti transfer setelah pembayaran",
  });

  // Handlers
  const handleAddItem = () => {
    const newItem = { id: Date.now(), description: "", price: 0, qty: 1 };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (id, field, value) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: field === "price" || field === "qty" ? Number(value) : value };
        }
        return item;
      })
    );
  };

  // Calculations & Formatting
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace("Rp", "Rp ");
  };

  const formatDateString = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const generateInvoiceNumber = () => {
    const datePart = invoiceDate.replace(/-/g, "");
    const counterPart = invoiceCounter.toString().padStart(3, "0");
    return `INV-${invoiceCategory}-${datePart}-${counterPart}`;
  };

  const grandTotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  // PDF Export
  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) return;
    setIsGenerating(true);

    try {
      const dataUrl = await toPng(invoiceRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High resolution equivalent to html2canvas scale: 2
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (invoiceRef.current.offsetHeight * pdfWidth) / invoiceRef.current.offsetWidth;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${generateInvoiceNumber()}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Gagal membuat PDF. Silakan coba lagi.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* LEFT COLUMN: FORM */}
      <div className="w-full lg:w-1/3 bg-white p-6 md:p-8 border-r border-neutral-200 overflow-y-auto h-auto lg:h-screen lg:sticky lg:top-0 custom-scrollbar">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-brand-dark">Input Invoice</h2>
          <Link to="/" className="text-neutral-500 hover:text-brand transition-colors p-2 bg-neutral-100 rounded-full">
            <Home size={18} />
          </Link>
        </div>

        {/* Action Button */}
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="w-full btn-primary mb-8 sticky top-0 z-10 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isGenerating ? "Mengekspor PDF..." : (
            <>
              <Download size={18} /> Unduh PDF
            </>
          )}
        </button>

        <div className="space-y-8">
          {/* Section: Info Utama */}
          <section>
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-100 pb-2">Info Utama</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Nama Customer</label>
                  <input
                    type="text"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Kategori Layanan</label>
                  <select
                    value={invoiceCategory}
                    onChange={(e) => setInvoiceCategory(e.target.value)}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white"
                  >
                    <option value="CPY">Copywriting (CPY)</option>
                    <option value="WEB">Web Development (WEB)</option>
                    <option value="DSN">Desain Grafis (DSN)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">No Urut (Counter)</label>
                  <input
                    type="number"
                    min="1"
                    value={invoiceCounter}
                    onChange={(e) => setInvoiceCounter(Number(e.target.value))}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Penerbit */}
          <section>
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-100 pb-2">Diterbitkan Oleh</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">Nama</label>
                <input
                  type="text"
                  value={sender.name}
                  onChange={(e) => setSender({ ...sender, name: e.target.value })}
                  className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">Alamat</label>
                <input
                  type="text"
                  value={sender.address}
                  onChange={(e) => setSender({ ...sender, address: e.target.value })}
                  className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">WhatsApp</label>
                  <input
                    type="text"
                    value={sender.phone}
                    onChange={(e) => setSender({ ...sender, phone: e.target.value })}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={sender.email}
                    onChange={(e) => setSender({ ...sender, email: e.target.value })}
                    className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Item Tagihan */}
          <section>
            <div className="flex items-center justify-between mb-4 border-b border-neutral-100 pb-2">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Item Tagihan</h3>
              <button
                onClick={handleAddItem}
                className="text-xs font-bold text-brand hover:text-brand-dark flex items-center gap-1 bg-brand-lightest px-2 py-1 rounded"
              >
                <Plus size={14} /> Tambah
              </button>
            </div>
            
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="p-4 border border-neutral-200 rounded-lg bg-neutral-50 relative">
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="absolute -top-2 -right-2 bg-danger text-white rounded-full p-1.5 shadow hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-500 mb-1 uppercase">Deskripsi Item {index + 1}</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                        className="w-full border border-neutral-200 rounded-md px-2 py-1.5 text-sm focus:ring-1 focus:ring-brand outline-none"
                        placeholder="Misal: Jasa Pembuatan Web"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-500 mb-1 uppercase">Harga (Rp)</label>
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) => handleItemChange(item.id, "price", e.target.value)}
                          className="w-full border border-neutral-200 rounded-md px-2 py-1.5 text-sm focus:ring-1 focus:ring-brand outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-500 mb-1 uppercase">Qty</label>
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) => handleItemChange(item.id, "qty", e.target.value)}
                          className="w-full border border-neutral-200 rounded-md px-2 py-1.5 text-sm focus:ring-1 focus:ring-brand outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Metode Pembayaran */}
          <section>
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-100 pb-2">Metode Pembayaran</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">Platform (e.g. DANA/GOPAY)</label>
                <input
                  type="text"
                  value={payment.details}
                  onChange={(e) => setPayment({ ...payment, details: e.target.value })}
                  className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">Atas Nama (A.n)</label>
                <input
                  type="text"
                  value={payment.accountName}
                  onChange={(e) => setPayment({ ...payment, accountName: e.target.value })}
                  className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">Instruksi Khusus</label>
                <input
                  type="text"
                  value={payment.instruction}
                  onChange={(e) => setPayment({ ...payment, instruction: e.target.value })}
                  className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-brand outline-none transition-all"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* RIGHT COLUMN: PREVIEW */}
      <div className="w-full lg:w-2/3 bg-neutral-100 p-4 md:p-8 flex justify-center items-start overflow-y-auto min-h-screen">
        <div 
          ref={invoiceRef}
          className="bg-white shadow-2xl relative"
          style={{ 
            width: "210mm", 
            minHeight: "297mm", 
            padding: "20mm 15mm" // Internal margins
          }}
        >
          {/* Header Row */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-[40px] font-black text-neutral-900 uppercase tracking-tight">INVOICE</h1>
            <div className="flex flex-col items-end">
              <img src={logo} alt="Logo" className="h-16 object-contain" />
            </div>
          </div>

          <hr className="border-t-2 border-neutral-900 mb-6" />

          {/* Info Row */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold text-neutral-900 uppercase mb-2">DITERBITKAN OLEH :</h3>
              <p className="text-[13px] font-bold text-neutral-900">{sender.name}</p>
              <p className="text-[13px] text-neutral-700">{sender.address}</p>
              <p className="text-[13px] text-neutral-700">WA: {sender.phone}</p>
              <p className="text-[13px] text-neutral-700">Email: {sender.email}</p>
            </div>
            <div className="text-right">
              <h3 className="text-sm font-bold text-neutral-900 uppercase mb-2">DITAGIHKAN KEPADA:</h3>
              <p className="text-[13px] font-bold text-neutral-900">{customer}</p>
              <p className="text-[13px] text-neutral-700">No. Invoice: {generateInvoiceNumber()}</p>
              <p className="text-[13px] text-neutral-700">Tanggal: {formatDateString(invoiceDate)}</p>
            </div>
          </div>

          {/* Table */}
          <div className="mb-4">
            <table className="w-full text-left border-collapse border border-brand text-[13px]">
              <thead>
                <tr className="bg-[#222569] text-white">
                  <th className="py-2.5 px-4 font-semibold text-center border-r border-[#222569] w-12">No</th>
                  <th className="py-2.5 px-4 font-semibold border-r border-[#222569]">Item Description</th>
                  <th className="py-2.5 px-4 font-semibold text-center border-r border-[#222569] w-32">Price</th>
                  <th className="py-2.5 px-4 font-semibold text-center border-r border-[#222569] w-16">Qty</th>
                  <th className="py-2.5 px-4 font-semibold text-center w-36">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id} className="border-b border-brand-dark/20 h-10">
                    <td className="py-2 px-4 border-r border-brand-dark/20 text-center font-semibold">{index + 1}</td>
                    <td className="py-2 px-4 border-r border-brand-dark/20 font-bold">{item.description}</td>
                    <td className="py-2 px-4 border-r border-brand-dark/20 text-center font-bold">{formatCurrency(item.price)}</td>
                    <td className="py-2 px-4 border-r border-brand-dark/20 text-center font-bold">{item.qty}</td>
                    <td className="py-2 px-4 text-center font-bold">{formatCurrency(item.price * item.qty)}</td>
                  </tr>
                ))}
                
                {/* Empty filler rows to make it look like the picture */}
                {Array.from({ length: Math.max(0, 6 - items.length) }).map((_, i) => (
                  <tr key={`empty-${i}`} className="border-b border-brand-dark/20 h-10">
                    <td className="border-r border-brand-dark/20"></td>
                    <td className="border-r border-brand-dark/20"></td>
                    <td className="border-r border-brand-dark/20"></td>
                    <td className="border-r border-brand-dark/20"></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer of Table (Logo and Total) */}
          <div className="flex justify-between items-start mb-16">
            <div className="pt-2">
              <img src={logoSecondary} alt="Logo Small" className="h-10 object-contain" />
            </div>
            <div className="bg-[#222569] text-white py-3 px-6 w-72 flex justify-between items-center shadow-sm">
              <span className="font-bold text-sm">Total Tagihan :</span>
              <span className="font-bold text-sm">{formatCurrency(grandTotal)}</span>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-[#4EDFD2] border border-[#2EBFAF] p-4 max-w-md shadow-sm">
            <h4 className="text-[13px] font-bold text-neutral-900 uppercase mb-1">{payment.method}</h4>
            <p className="text-[13px] text-neutral-900 mb-0.5">{payment.details}</p>
            <p className="text-[13px] text-neutral-900 mb-2">{payment.accountName}</p>
            <p className="text-[13px] text-neutral-900 font-medium italic">{payment.instruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
