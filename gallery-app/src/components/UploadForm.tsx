function UploadForm() {
  return (
    <div className="text-center">
    <form action="">
      <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
      <button className="btn gap-3"> Upload File 📁</button>
    </form>
    </div>
  )
}

export default UploadForm
