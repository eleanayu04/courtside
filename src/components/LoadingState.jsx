export function Spinner() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-court-accent animate-spin" />
    </div>
  )
}

export function ErrorMsg({ message }) {
  return (
    <div className="text-center py-20 text-gray-500">
      <div className="text-4xl mb-3">⚠️</div>
      <p className="text-sm">{message || 'Failed to load data'}</p>
    </div>
  )
}
