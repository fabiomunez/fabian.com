import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export const ReactPerformanceOptimization = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Frontend
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> React
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> TypeScript
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            React Performance Optimization Tips
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-8">
            <span className="flex items-center gap-2">
              <User size={15} className="text-indigo-500" />
              Fabian Munez
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-indigo-500" />
              February 10, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-indigo-500" />
              6 min read
            </span>
          </div>
        </motion.header>

        {/* Cover image */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200"
            alt="React Performance Optimization"
            className="w-full h-72 md:h-96 object-cover"
          />
        </motion.div>

        {/* Article body */}
        <motion.article
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
            React is fast by default — but every unnecessary render, bloated bundle, and
            unoptimized image chips away at that speed. After shipping production apps to
            thousands of users, here are the optimizations that have made the biggest
            measurable difference.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Stop Blindly Re-rendering with memo and useCallback</h2>
          <p>
            React re-renders a component every time its parent renders, even if its own props
            haven't changed. Wrap pure components with <code>React.memo</code> and stabilise
            callbacks with <code>useCallback</code> to prevent this:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// Without memo: re-renders on every parent render
const ProductCard = ({ product, onAdd }) => { ... };

// With memo: only re-renders when product or onAdd changes
const ProductCard = React.memo(({ product, onAdd }) => { ... });

// Stable callback reference — won't cause ProductCard to re-render
const handleAdd = useCallback((id: string) => {
  addToCart(id);
}, [addToCart]);`}
          </pre>
          <p>
            <strong>Warning:</strong> don't add <code>memo</code> everywhere blindly. Profile first —
            unnecessary memoisation adds its own overhead.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Code Split Everything You Can</h2>
          <p>
            Loading your entire app upfront is the single biggest Lighthouse killer. Use
            React's <code>lazy</code> and <code>Suspense</code> to load routes and heavy
            components only when needed:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// Before: entire admin dashboard in the initial bundle
import AdminDashboard from './AdminDashboard';

// After: admin dashboard loads only when the user navigates there
const AdminDashboard = React.lazy(() => import('./AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}`}
          </pre>
          <p>
            In Vite projects this is essentially free — every dynamic import becomes
            a separate chunk automatically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Virtualise Long Lists</h2>
          <p>
            Rendering 500 rows in a table or 1,000 items in a feed is a guaranteed
            performance killer. Use <strong>TanStack Virtual</strong> (previously react-virtual)
            to render only what's in the viewport:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`import { useVirtualizer } from '@tanstack/react-virtual';

const parentRef = useRef<HTMLDivElement>(null);

const rowVirtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 60,
});

return (
  <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
    <div style={{ height: rowVirtualizer.getTotalSize() }}>
      {rowVirtualizer.getVirtualItems().map(virtualRow => (
        <div
          key={virtualRow.index}
          style={{ transform: \`translateY(\${virtualRow.start}px)\` }}
        >
          <ItemRow item={items[virtualRow.index]} />
        </div>
      ))}
    </div>
  </div>
);`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Optimise Images — The Low-Hanging Fruit</h2>
          <p>
            Images are usually the largest assets on any page. Three rules I follow on every project:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Always specify <code>width</code> and <code>height</code> to prevent layout shift (CLS)</li>
            <li>Use <code>loading="lazy"</code> on anything below the fold</li>
            <li>Serve WebP/AVIF instead of JPG/PNG — typically 30–50% smaller</li>
          </ul>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`<picture>
  <source srcSet="hero.avif" type="image/avif" />
  <source srcSet="hero.webp" type="image/webp" />
  <img
    src="hero.jpg"
    alt="Hero image"
    width={1200}
    height={630}
    loading="eager"   // above the fold: eager
    decoding="async"
  />
</picture>`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Debounce Expensive Operations</h2>
          <p>
            Search inputs, resize handlers, and scroll listeners can fire hundreds of times
            per second. Debounce them to limit work to what actually matters:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`import { useDeferredValue } from 'react';

const SearchResults = ({ query }: { query: string }) => {
  const deferredQuery = useDeferredValue(query); // built-in React 18 debounce

  const results = useMemo(
    () => heavyFilterOperation(data, deferredQuery),
    [deferredQuery]
  );

  return <ResultsList results={results} />;
};`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Profile Before You Optimise</h2>
          <p>
            The React DevTools Profiler is your best friend. Record a session, look for
            components with high render counts or long render times, and fix those first.
            Optimising the wrong component wastes time and adds complexity.
          </p>
          <p>
            Key metrics to chase: <strong>LCP &lt; 2.5s</strong>, <strong>FID &lt; 100ms</strong>,
            and <strong>CLS &lt; 0.1</strong>. Hit these and your users will feel the difference.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p>
            Performance is a feature. The techniques above — selective memoisation, code
            splitting, list virtualisation, image optimisation, and smart debouncing — cover
            the majority of real-world bottlenecks. Start with profiling, fix the biggest
            offenders first, and measure every change.
          </p>
          <p>
            Building something with React and want a second opinion on the architecture?{" "}
            <Link to="/#contact" className="text-indigo-600 underline">Get in touch</Link> — I'm always happy to review code.
          </p>
        </motion.article>
      </div>
    </div>
  );
};
