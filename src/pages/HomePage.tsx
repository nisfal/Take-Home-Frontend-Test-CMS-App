export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-semibold text-blue-700 mb-2">
          Selamat Datang di <span className="text-blue-900">CMS App</span> 👋
        </h1>
        <p className="text-gray-600 text-base">
          Gunakan menu navigasi di atas untuk mengatur konten, grup menu, atau pengaturan lainnya.
        </p>
      </div>
    </div>
  );
}
