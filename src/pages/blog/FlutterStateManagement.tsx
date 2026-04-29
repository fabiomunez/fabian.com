import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export const FlutterStateManagement = () => {
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
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Mobile
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Flutter
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Tag size={12} /> Dart
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Flutter State Management Guide
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-8">
            <span className="flex items-center gap-2">
              <User size={15} className="text-indigo-500" />
              Fabian Munez
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-indigo-500" />
              February 5, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-indigo-500" />
              10 min read
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
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200"
            alt="Flutter State Management Guide"
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
            State management is the most debated topic in the Flutter ecosystem. With Provider,
            Riverpod, BLoC, GetX, and more all competing for mindshare, choosing the right
            solution for your project can be overwhelming. This guide cuts through the noise
            with practical comparisons and real code.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Flutter's Reactive Model</h2>
          <p>
            Flutter rebuilds widget subtrees when state changes. Every state management solution
            is essentially a way to control <em>which</em> widgets rebuild and <em>when</em>.
            Before picking a library, understand <code>setState</code> — it's the foundation
            everything else is built on:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`class CounterWidget extends StatefulWidget {
  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  void _increment() {
    setState(() => _count++);  // triggers rebuild of this subtree only
  }

  @override
  Widget build(BuildContext context) {
    return Text('Count: $_count');
  }
}`}
          </pre>
          <p>
            <code>setState</code> is fine for local UI state. The problem comes when multiple
            distant widgets need the same data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 1: Provider — The Gateway Drug</h2>
          <p>
            Provider is Flutter's officially recommended solution and the best starting point
            for most apps. It uses <code>InheritedWidget</code> under the hood to propagate
            state down the tree:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// 1. Define your notifier
class CartNotifier extends ChangeNotifier {
  final List<CartItem> _items = [];
  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(CartItem item) {
    _items.add(item);
    notifyListeners();
  }
}

// 2. Provide it at the top of your tree
ChangeNotifierProvider(
  create: (_) => CartNotifier(),
  child: MyApp(),
)

// 3. Consume it anywhere in the tree
final cart = context.watch<CartNotifier>();
Text('${cart.items.length} items in cart')`}
          </pre>
          <p>
            <strong>Best for:</strong> small to medium apps, teams new to state management,
            apps where simplicity matters more than strictness.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 2: Riverpod — Provider, Evolved</h2>
          <p>
            Riverpod fixes Provider's biggest pain points: no <code>BuildContext</code>
            required, compile-time safety, and testability without a widget tree.
            I use Riverpod on all my new Flutter projects:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// 1. Define providers at the top level (no context needed)
final cartProvider = StateNotifierProvider<CartNotifier, CartState>(
  (ref) => CartNotifier(),
);

// 2. In your notifier
class CartNotifier extends StateNotifier<CartState> {
  CartNotifier() : super(CartState.empty());

  void addItem(CartItem item) {
    state = state.copyWith(items: [...state.items, item]);
  }
}

// 3. Consume in any widget — no context.watch needed
class CartIcon extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(cartProvider).items.length;
    return Badge(label: Text('$count'));
  }
}`}
          </pre>
          <p>
            <strong>Best for:</strong> medium to large apps, teams that value testability,
            projects with complex async state (Riverpod has first-class <code>FutureProvider</code>
            and <code>StreamProvider</code> support).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 3: BLoC — The Enterprise Choice</h2>
          <p>
            BLoC (Business Logic Component) enforces strict separation between UI and business
            logic via streams. It's more verbose but the most predictable and testable approach
            for large teams:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto my-6">
{`// Events
abstract class CartEvent {}
class AddItemEvent extends CartEvent {
  final CartItem item;
  AddItemEvent(this.item);
}

// States
abstract class CartState {}
class CartLoaded extends CartState {
  final List<CartItem> items;
  CartLoaded(this.items);
}

// BLoC
class CartBloc extends Bloc<CartEvent, CartState> {
  CartBloc() : super(CartLoaded([])) {
    on<AddItemEvent>((event, emit) {
      final current = (state as CartLoaded).items;
      emit(CartLoaded([...current, event.item]));
    });
  }
}

// Widget
BlocBuilder<CartBloc, CartState>(
  builder: (context, state) {
    if (state is CartLoaded) return CartList(items: state.items);
    return CircularProgressIndicator();
  },
)`}
          </pre>
          <p>
            <strong>Best for:</strong> large enterprise apps, teams with strict code review
            processes, apps that need detailed audit trails of state transitions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which Should You Choose?</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Solution</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Learning Curve</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Boilerplate</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Testability</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">setState</td>
                  <td className="p-3 border border-gray-200">Low</td>
                  <td className="p-3 border border-gray-200">Minimal</td>
                  <td className="p-3 border border-gray-200">Low</td>
                  <td className="p-3 border border-gray-200">Local widget state</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Provider</td>
                  <td className="p-3 border border-gray-200">Low</td>
                  <td className="p-3 border border-gray-200">Low</td>
                  <td className="p-3 border border-gray-200">Medium</td>
                  <td className="p-3 border border-gray-200">Small–medium apps</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Riverpod</td>
                  <td className="p-3 border border-gray-200">Medium</td>
                  <td className="p-3 border border-gray-200">Low–Medium</td>
                  <td className="p-3 border border-gray-200">High</td>
                  <td className="p-3 border border-gray-200">Most modern apps</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">BLoC</td>
                  <td className="p-3 border border-gray-200">High</td>
                  <td className="p-3 border border-gray-200">High</td>
                  <td className="p-3 border border-gray-200">Very High</td>
                  <td className="p-3 border border-gray-200">Large enterprise apps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">My Personal Take</h2>
          <p>
            For solo projects and startups I reach for <strong>Riverpod</strong> — it's the
            sweet spot between simplicity and power. For enterprise clients with large teams
            I recommend <strong>BLoC</strong> because its strict patterns enforce consistency
            across developers. Avoid mixing approaches in the same app — pick one and stick to it.
          </p>
          <p>
            Building a Flutter app and need help choosing an architecture?{" "}
            <Link to="/#contact" className="text-indigo-600 underline">Send me a message</Link>{" "}
            — I'd be happy to discuss your specific requirements.
          </p>
        </motion.article>
      </div>
    </div>
  );
};
