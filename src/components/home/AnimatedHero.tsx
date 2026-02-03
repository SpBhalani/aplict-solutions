'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

// HR Management Module - Tilted, peaking from left, behind dashboard
function HRManagementModule({ delay, height }: { delay: number; height: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveEmployee((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const employees = [
    { 
      name: 'John Smith', 
      role: 'Developer', 
      status: 'active',
      department: 'Engineering',
      projects: 5,
      performance: '95%',
      skills: ['React', 'Node.js', 'TypeScript'],
      joinDate: '2022-01-15',
    },
    { 
      name: 'Sarah Chen', 
      role: 'Designer', 
      status: 'active',
      department: 'Design',
      projects: 8,
      performance: '98%',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      joinDate: '2021-06-20',
    },
    { 
      name: 'Mike Johnson', 
      role: 'Manager', 
      status: 'on-leave',
      department: 'Operations',
      projects: 12,
      performance: '92%',
      skills: ['Leadership', 'Strategy', 'Planning'],
      joinDate: '2020-03-10',
    },
    { 
      name: 'Emily Davis', 
      role: 'Analyst', 
      status: 'active',
      department: 'Analytics',
      projects: 6,
      performance: '97%',
      skills: ['Data Analysis', 'SQL', 'Python'],
      joinDate: '2022-09-05',
    },
  ];

  const activeData = employees[activeEmployee];

  return (
    <div
      className="absolute left-1/4 z-0"
      style={{
        width: 'clamp(280px, 35vw, 500px)',
        height: height,
        top: 'calc(50% + 60px)', // Positioned lower for pyramid effect
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(-70%) rotate(-8deg) translateY(-50%) scale(1)' 
          : 'translateX(-70%) rotate(-8deg) translateY(-50%) scale(0.9)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="glass rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 overflow-visible h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(29, 150, 137, 0.95) 0%, rgba(25, 63, 117, 0.95) 100%)',
        }}
      >
        <div className="p-4 md:p-5 space-y-3 md:space-y-4 h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <h4 className="text-xs md:text-sm font-bold text-white">HR Management</h4>
            <div className="size-2 rounded-full bg-success animate-pulse" />
          </div>

          {/* Employee List */}
          <div className="space-y-2 flex-1 overflow-y-auto min-h-0 px-2 py-2">
            {employees.map((employee, idx) => (
              <div 
                key={idx}
                className={`bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm flex items-center gap-2 md:gap-3 transition-all duration-500 ${
                  activeEmployee === idx ? 'ring-2 ring-accent ring-offset-0 bg-white/15' : ''
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? `translateX(0) ${activeEmployee === idx ? 'scale(1.02)' : 'scale(1)'}` 
                    : 'translateX(-20px)',
                  transition: `all 0.5s ${delay + idx * 0.1}s`,
                }}
              >
                <div className="size-8 md:size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Icon name="UserIcon" size={16} className="md:w-[18px] md:h-[18px] text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-bold text-white truncate">{employee.name}</p>
                  <p className="text-[10px] md:text-xs text-white/70 truncate">{employee.role}</p>
                </div>
                <div className={`size-2 rounded-full shrink-0 ${employee.status === 'active' ? 'bg-success' : 'bg-warning'}`} />
              </div>
            ))}
          </div>

          {/* Dynamic Employee Details - Updates based on selection, synced with animation */}
          <div 
            key={`employee-${activeEmployee}`} // Force re-render when selection changes
            className="bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm border border-white/20 shrink-0"
            style={{
              opacity: 1,
              animation: 'fadeInUp 0.3s ease-out',
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs md:text-sm font-bold text-white">{activeData.name}</p>
                <span className="text-[10px] md:text-xs text-white/70">{activeData.department}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] md:text-xs text-white/60 mb-1">Projects</p>
                  <p className="text-sm md:text-base font-bold text-white">{activeData.projects}</p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-white/60 mb-1">Performance</p>
                  <p className="text-sm md:text-base font-bold text-success">{activeData.performance}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-[10px] md:text-xs text-white/60 mb-1">Skills</p>
                <div className="flex flex-wrap gap-1">
                  {activeData.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Order/Inventory Management Module - Right side, behind dashboard
function OrderManagementModule({ delay, height }: { delay: number; height: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeOrder, setActiveOrder] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveOrder((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const orders = [
    { 
      id: '#ORD-1245', 
      customer: 'Acme Corp', 
      amount: '$12,450', 
      status: 'Processing',
      items: 45,
      shippingDate: '2024-01-20',
      priority: 'High',
      location: 'New York, NY',
      paymentMethod: 'Credit Card',
    },
    { 
      id: '#ORD-1246', 
      customer: 'Tech Inc', 
      amount: '$8,920', 
      status: 'Shipped',
      items: 32,
      shippingDate: '2024-01-18',
      priority: 'Medium',
      location: 'San Francisco, CA',
      paymentMethod: 'Wire Transfer',
    },
    { 
      id: '#ORD-1247', 
      customer: 'Global Ltd', 
      amount: '$15,680', 
      status: 'Pending',
      items: 58,
      shippingDate: '2024-01-22',
      priority: 'High',
      location: 'Chicago, IL',
      paymentMethod: 'Purchase Order',
    },
  ];

  const activeData = orders[activeOrder];

  return (
    <div
      className="absolute right-1/4 z-0"
      style={{
        width: 'clamp(280px, 35vw, 500px)',
        height: height,
        top: 'calc(50% + 60px)', // Positioned lower for pyramid effect
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(70%) rotate(8deg) translateY(-50%) scale(1)' 
          : 'translateX(70%) rotate(8deg) translateY(-50%) scale(0.9)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="glass rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 overflow-visible h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(53, 136, 255, 0.95) 0%, rgba(29, 150, 137, 0.95) 100%)',
        }}
      >
        <div className="p-4 md:p-5 space-y-3 md:space-y-4 h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <h4 className="text-xs md:text-sm font-bold text-white">Order Management</h4>
            <div className="px-2 md:px-3 py-1 bg-white/20 rounded-full">
              <span className="text-[10px] md:text-xs font-bold text-white">Live</span>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-2 flex-1 overflow-y-auto min-h-0 px-2 py-2">
            {orders.map((order, idx) => (
              <div 
                key={idx}
                className={`bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm transition-all duration-500 ${
                  activeOrder === idx ? 'ring-2 ring-accent ring-offset-0 bg-white/15' : ''
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? `translateX(0) ${activeOrder === idx ? 'scale(1.02)' : 'scale(1)'}` 
                    : 'translateX(20px)',
                  transition: `all 0.5s ${delay + idx * 0.1}s`,
                }}
              >
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <p className="text-[10px] md:text-xs font-bold text-white truncate">{order.id}</p>
                  <span className={`text-[10px] md:text-xs px-2 py-0.5 md:py-1 rounded-full shrink-0 ml-2 ${
                    order.status === 'Shipped' ? 'bg-success/30 text-success' :
                    order.status === 'Processing' ? 'bg-primary/30 text-primary' :
                    'bg-warning/30 text-warning'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] md:text-xs text-white/70 truncate">{order.customer}</p>
                  <p className="text-xs md:text-sm font-bold text-white shrink-0 ml-2">{order.amount}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Order Details - Updates based on selection, synced with animation */}
          <div 
            key={`order-${activeOrder}`} // Force re-render when selection changes
            className="bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm border border-white/20 shrink-0"
            style={{
              opacity: 1,
              animation: 'fadeInUp 0.3s ease-out',
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs md:text-sm font-bold text-white">{activeData.id}</p>
                <span className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full ${
                  activeData.priority === 'High' ? 'bg-warning/30 text-warning' :
                  'bg-white/20 text-white/80'
                }`}>
                  {activeData.priority}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] md:text-xs text-white/60 mb-1">Items</p>
                  <p className="text-sm md:text-base font-bold text-white">{activeData.items}</p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-white/60 mb-1">Shipping</p>
                  <p className="text-sm md:text-base font-bold text-white">{activeData.shippingDate}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] md:text-xs text-white/60">Location</p>
                  <p className="text-[10px] md:text-xs text-white/80">{activeData.location}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] md:text-xs text-white/60">Payment</p>
                  <p className="text-[10px] md:text-xs text-white/80">{activeData.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Central Dashboard Component - Restored original width, taller than side modules
function CentralDashboard({ delay, sideModuleHeight }: { delay: number; sideModuleHeight: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const targetData = [45, 52, 48, 65, 58, 72, 68, 80, 75, 85, 82, 90];
    const interval = setInterval(() => {
      setChartData((prev) => 
        prev.map((val, idx) => {
          const diff = targetData[idx] - val;
          return diff > 0 ? val + 1 : diff < 0 ? val - 1 : val;
        })
      );
    }, 30);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Dashboard height is 30% taller than side modules
  const dashboardHeight = 'clamp(520px, 65vh, 780px)';

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-10"
      style={{
        width: 'clamp(360px, 70vw, 900px)', // Restored original width
        height: dashboardHeight,
        top: '50%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translate(-50%, -50%) scale(1)' 
          : 'translate(-50%, -50%) scale(0.95)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="glass rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 overflow-hidden h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(9, 23, 43, 0.98) 0%, rgba(25, 63, 117, 0.98) 100%)',
        }}
      >
        <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 h-full flex flex-col overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1">Business Dashboard</h3>
              <p className="text-[10px] md:text-xs text-white/60">Real-time Analytics & Insights</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] md:text-xs text-white/70">Live</span>
            </div>
          </div>

          {/* Key Metrics Grid - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 shrink-0">
            {[
              { label: 'Revenue', value: '$2.4M', change: '+12%', icon: 'CurrencyDollarIcon' },
              { label: 'Users', value: '45K', change: '+8%', icon: 'UserGroupIcon' },
              { label: 'Orders', value: '1.2K', change: '+15%', icon: 'ShoppingCartIcon' },
              { label: 'Growth', value: '34%', change: '+5%', icon: 'ChartBarIcon' },
            ].map((metric, idx) => (
              <div 
                key={idx}
                className="bg-white/5 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ${delay + idx * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <Icon name={metric.icon as any} size={14} className="md:w-[18px] md:h-[18px] text-accent" />
                  <span className="text-[10px] md:text-xs text-white/60">{metric.label}</span>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-[10px] md:text-xs text-success">{metric.change} ↑</p>
              </div>
            ))}
          </div>

          {/* Main Chart - Responsive */}
          <div className="bg-white/5 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/10 shrink-0">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h4 className="text-xs md:text-sm font-bold text-white">Performance Overview</h4>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span className="text-[10px] md:text-xs text-white/60">Last 12 Months</span>
              </div>
            </div>
            <div className="h-24 md:h-32 lg:h-40 flex items-end gap-1 md:gap-1.5">
              {chartData.map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-primary via-accent to-success rounded-t transition-all duration-500"
                  style={{
                    height: `${height}%`,
                    minHeight: '6px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Recent Activity & System Status - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white/5 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/10">
              <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3">Recent Activity</h4>
              <div className="space-y-1.5 md:space-y-2">
                {['New order received', 'Payment processed', 'User registered'].map((activity, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 text-[10px] md:text-xs text-white/70"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.3s ${delay + idx * 0.1}s`,
                    }}
                  >
                    <div className="size-1.5 rounded-full bg-accent shrink-0" />
                    <span className="truncate">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/10">
              <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3">System Status</h4>
              <div className="space-y-1.5 md:space-y-2">
                {[
                  { label: 'API', status: 'operational' },
                  { label: 'Database', status: 'operational' },
                  { label: 'CDN', status: 'operational' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between text-[10px] md:text-xs"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.3s ${delay + idx * 0.1}s`,
                    }}
                  >
                    <span className="text-white/70">{item.label}</span>
                    <div className="flex items-center gap-1">
                      <div className="size-2 rounded-full bg-success shrink-0" />
                      <span className="text-success text-[10px] md:text-xs">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate consistent height for side modules
  const sideModuleHeight = 'clamp(400px, 50vh, 600px)';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-10">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="relative w-full h-[500px] sm:h-[750px] overflow-visible"
      >
        {/* Subtle Dynamic Gradient Overlay - No Box */}
        <div 
          className="absolute inset-0 opacity-5 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(29, 226, 137, 0.2) 0%, transparent 70%)`,
          }}
        />

        {/* HR Management Module - Left Side, 70% Hidden Behind Dashboard, Lower Position */}
        <HRManagementModule delay={0.4} height={sideModuleHeight} />

        {/* Order Management Module - Right Side, 70% Hidden Behind Dashboard, Lower Position */}
        <OrderManagementModule delay={0.6} height={sideModuleHeight} />

        {/* Central Dashboard - Taller than side modules, In Front, Higher Position */}
        <CentralDashboard delay={0.2} sideModuleHeight={sideModuleHeight} />
      </div>
    </div>
  );
}
