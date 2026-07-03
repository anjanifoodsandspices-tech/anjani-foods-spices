export const metadata = {
  title: 'Anjani Foods & Spices - Premium Quality Spices',
  description: 'Best quality spices and food products. Export quality guaranteed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333' }}>
        {children}
      </body>
    </html>
  )
}
