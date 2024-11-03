function ShowContent() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-md">
        <img
          src="https://placehold.co/400x200"
          alt="Screenshot of a TikTok video with a warning overlay"
          className="w-full"
        />
        <div className="p-4">
          <span className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
            IMPOSTOR CONTENT
          </span>
          <h2 className="mt-2 text-lg font-bold">
            [PENIPUAN] Anggota DPR Uya Kuya Berbagi Hadiah di TikTok
          </h2>
          <p className="text-sm text-gray-500">2023-11-08</p>
        </div>
      </div>
      <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-md">
        <img
          src="https://placehold.co/400x200"
          alt="Screenshot of a news broadcast with a warning overlay"
          className="w-full"
        />
        <div className="p-4">
          <span className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
            FABRICATED CONTENT
          </span>
          <h2 className="mt-2 text-lg font-bold">
            [SALAH] Prabowo Reshuffle Menteri
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="p-4">
            <span className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
              CEKFAKTA
            </span>
            <h2 className="mt-2 text-lg font-bold">
              [HOAKS] WHO Akui Mpox adalah Efek Samping Covid-19
            </h2>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="p-4">
            <span className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
              CEKFAKTA
            </span>
            <h2 className="mt-2 text-lg font-bold">
              [HOAKS] Raffi Ahmad Bagikan Rp 200 Juta Melalui Akun Instagram
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowContent;
