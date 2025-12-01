/**
 * RandomCollageGallery.tsx
 *
 * - Layout: CSS Grid asymmetric collage (not uniform cards)
 * - Responsive: 2 columns on small screens, 6 columns on large screens
 * - Replace IMAGES[] with your real image URLs (public folder / CDN)
 *
 * NOTE: I'm using your uploaded file path as example image:
 * /mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png
 */

const IMAGES = [
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  "/mnt/data/39f746db-b079-49f1-963d-c0057cc650c2.png",
  // add/replace more images here...
];

/**
 * Each item is { idx, cols, rows } describing how many grid columns/rows it spans.
 * Adjust spans to create varied collage. Tailwind's row-span/col-span classes are used.
 */
const LAYOUT = [
  { idx: 0, cols: 2, rows: 2 },
  { idx: 1, cols: 1, rows: 1 },
  { idx: 2, cols: 1, rows: 1 },
  { idx: 3, cols: 2, rows: 1 },
  { idx: 4, cols: 1, rows: 2 },
  { idx: 5, cols: 3, rows: 1 },
];

export default function RandomCollageGallery() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold text-[#00647F] mb-6 text-center">
        Galeri
      </h3>

      {/* Grid: responsive columns */}
      <div
        className="grid gap-4"
        style={{
          // small screens: 2 columns, large screens: 6 columns
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <style>{`
          @media(min-width: 768px) {
            .collage-grid { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 120px; }
          }
          @media(min-width: 1024px) {
            .collage-grid { grid-auto-rows: 140px; }
          }
        `}</style>

        <div className="collage-grid">
          {LAYOUT.map(({ idx, cols, rows }) => {
            const src = IMAGES[idx % IMAGES.length];
            // Tailwind utility class names:
            const colClass = `md:col-span-${cols}`;
            const rowClass = `md:row-span-${rows}`;
            // On small screens, we make each item simply full width in flow (no spans)
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-lg shadow-sm break-inside-avoid ${colClass} ${rowClass}`}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={src}
                  alt={`gallery-${idx}`}
                  className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
                  style={{
                    // on small screens keep a fixed height so layout stays pretty
                    height: 160,
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
