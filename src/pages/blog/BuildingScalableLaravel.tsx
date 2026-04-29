import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export const BuildingScalableLaravel = () => {
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
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Backend
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Laravel
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> PHP
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Building Scalable Laravel Applications
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-8">
            <span className="flex items-center gap-2">
              <User size={15} className="text-indigo-500" />
              Fabian Munez
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-indigo-500" />
              February 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-indigo-500" />
              8 min read
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
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
            alt="Building Scalable Laravel Applications"
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
            Laravel is one of the most popular PHP frameworks, but building applications that
            stay maintainable as your team and user base grows requires deliberate architectural
            decisions from day one. In this article I'll walk through the patterns and practices
            I apply on every serious project.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Organise with Domain-Driven Structure</h2>
          <p>
            The default Laravel folder structure works fine for small apps, but once you have
            dozens of models and controllers it becomes a maze. I group code by <strong>domain</strong> instead
            of by technical layer:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`app/
  Domains/
    Orders/
      Models/Order.php
      Services/OrderService.php
      Actions/PlaceOrderAction.php
      DTOs/OrderData.php
    Inventory/
      ...
  Http/
    Controllers/
      OrderController.php`}
          </pre>
          <p>
            Each domain owns its own models, services, actions, and DTOs. Controllers stay thin —
            they receive the HTTP request, delegate to an action class, and return a response.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Use Action Classes Instead of Fat Services</h2>
          <p>
            Service classes tend to balloon over time. I prefer single-responsibility
            <strong> Action</strong> classes — one class, one public method, one job:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`class PlaceOrderAction
{
    public function execute(OrderData $data): Order
    {
        DB::transaction(function () use ($data, &$order) {
            $order = Order::create($data->toArray());
            InventoryService::reserveItems($order);
            event(new OrderPlaced($order));
        });

        return $order;
    }
}`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Leverage Data Transfer Objects (DTOs)</h2>
          <p>
            Using <code>spatie/laravel-data</code>, I define strongly-typed DTOs for every
            request and response boundary. This eliminates raw array passing and makes
            refactoring safe:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`use Spatie\\LaravelData\\Data;

class OrderData extends Data
{
    public function __construct(
        public readonly string $customerId,
        public readonly array  $items,
        public readonly string $shippingAddress,
    ) {}
}`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Decouple with Events and Listeners</h2>
          <p>
            Any side effect that doesn't need to happen synchronously — sending emails,
            updating analytics, notifying a webhook — should be handled in a queued listener,
            not inline in your action class:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// EventServiceProvider.php
OrderPlaced::class => [
    SendOrderConfirmationEmail::class,
    UpdateInventorySnapshot::class,
    NotifyWarehouse::class,
],`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Write Tests First</h2>
          <p>
            Laravel's testing suite is excellent. I write feature tests for every endpoint
            and unit tests for action classes. A project without tests is a project you're
            afraid to change:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`it('places an order and fires events', function () {
    Event::fake([OrderPlaced::class]);

    $response = postJson('/api/orders', OrderData::factory()->make()->toArray());

    $response->assertCreated();
    Event::assertDispatched(OrderPlaced::class);
});`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cache Aggressively, Invalidate Precisely</h2>
          <p>
            Use Redis-backed cache tags so you can invalidate exactly what changed, not everything:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// Writing
Cache::tags(['products', "product:{$id}"])
     ->put("product:{$id}", $product, now()->addHour());

// Invalidating only this product
Cache::tags(["product:{$id}"])->flush();`}
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p>
            Scalable Laravel comes down to a few core habits: keep controllers thin, push
            business logic into action classes, type everything with DTOs, decouple side
            effects via events, and write tests before shipping. Apply these consistently
            and your codebase will be a pleasure to work in at any scale.
          </p>
          <p>
            Have questions or a different approach? Reach out via the{" "}
            <Link to="/#contact" className="text-indigo-600 underline">contact form</Link> — I'd love to hear how you architect your Laravel apps.
          </p>
        </motion.article>
      </div>
    </div>
  );
};
