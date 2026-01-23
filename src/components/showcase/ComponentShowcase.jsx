import { useState } from 'react';

// UI Components
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Checkbox from '../ui/Checkbox';
import Toggle from '../ui/Toggle';
import Radio from '../ui/Radio';
import FileInput from '../ui/FileInput';
import Alert from '../ui/Alert';
import Spinner from '../ui/Spinner';
import Skeleton from '../ui/Skeleton';
import { ToastProvider, useToast } from '../ui/Toast';
import Progress from '../ui/Progress';
import Modal from '../ui/Modal';
import Accordion from '../ui/Accordion';
import Tabs from '../ui/Tabs';
import Dropdown from '../ui/Dropdown';
import Tooltip from '../ui/Tooltip';
import Drawer from '../ui/Drawer';
import Breadcrumbs from '../ui/Breadcrumbs';
import Pagination from '../ui/Pagination';
import Table from '../ui/Table';
import Carousel from '../ui/Carousel';
import Divider from '../ui/Divider';

// Section Components
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Stats from '../sections/Stats';
import Timeline from '../sections/Timeline';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

// Layout
import Container from '../layout/Container';
import Section from '../layout/Section';

export default function ComponentShowcase() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('buttons');

  const sections = [
    { id: 'buttons', label: '1.1 Buttons', category: 'UI Primitives' },
    { id: 'badges', label: '1.2 Badges', category: 'UI Primitives' },
    { id: 'cards', label: '1.3 Cards', category: 'UI Primitives' },
    { id: 'avatars', label: '1.4 Avatars', category: 'UI Primitives' },
    { id: 'inputs', label: '2.1 Text Inputs', category: 'Form Inputs' },
    { id: 'selects', label: '2.2 Selects', category: 'Form Inputs' },
    { id: 'checkboxes', label: '2.3 Checkboxes & Toggles', category: 'Form Inputs' },
    { id: 'radios', label: '2.4 Radio Buttons', category: 'Form Inputs' },
    { id: 'fileinput', label: '2.5 File Input', category: 'Form Inputs' },
    { id: 'alerts', label: '3.1 Alerts', category: 'Feedback' },
    { id: 'spinners', label: '3.2 Spinners', category: 'Feedback' },
    { id: 'skeletons', label: '3.3 Skeletons', category: 'Feedback' },
    { id: 'toasts', label: '3.4 Toasts', category: 'Feedback' },
    { id: 'progress', label: '3.5 Progress', category: 'Feedback' },
    { id: 'modals', label: '4.1 Modals', category: 'Interactive' },
    { id: 'accordions', label: '4.2 Accordions', category: 'Interactive' },
    { id: 'tabs', label: '4.3 Tabs', category: 'Interactive' },
    { id: 'dropdowns', label: '4.4 Dropdowns', category: 'Interactive' },
    { id: 'tooltips', label: '4.5 Tooltips', category: 'Interactive' },
    { id: 'drawers', label: '4.6 Drawers', category: 'Interactive' },
    { id: 'carousel', label: '4.7 Carousel', category: 'Interactive' },
    { id: 'breadcrumbs', label: '5.1 Breadcrumbs', category: 'Navigation' },
    { id: 'pagination', label: '5.2 Pagination', category: 'Navigation' },
    { id: 'tables', label: '5.3 Tables', category: 'Data Display' },
    { id: 'dividers', label: '5.4 Dividers', category: 'Layout' },
    { id: 'features', label: '6.1 Features', category: 'Sections' },
    { id: 'pricing', label: '6.2 Pricing', category: 'Sections' },
    { id: 'stats', label: '6.3 Stats', category: 'Sections' },
    { id: 'timeline', label: '6.4 Timeline', category: 'Sections' },
    { id: 'testimonials', label: '6.5 Testimonials', category: 'Sections' },
    { id: 'contact', label: '6.6 Contact', category: 'Sections' },
  ];

  const categories = [...new Set(sections.map(s => s.category))];

  return (
    <ToastProvider>
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-700">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Component Library
            </h1>
            <Badge variant="success">v1.0</Badge>
          </div>
          <a href="/" className="text-sm text-stone-600 dark:text-stone-400 hover:text-green-main">
            ← Back to Site
          </a>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 shrink-0 border-r border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 h-[calc(100vh-65px)] sticky top-[65px] overflow-y-auto">
            <nav className="p-4">
              {categories.map(category => (
                <div key={category} className="mb-6">
                  <h3 className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {sections
                      .filter(s => s.category === category)
                      .map(section => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            onClick={() => setActiveSection(section.id)}
                            className={`
                              block px-3 py-2 rounded-lg text-sm transition-colors
                              ${activeSection === section.id
                                ? 'bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light font-medium'
                                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                              }
                            `}
                          >
                            {section.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-8 max-w-5xl">
          {/* 1. UI Primitives */}
          <ComponentSection id="buttons" title="1.1 Buttons" description="Button component with multiple variants and sizes">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="brass">Brass</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="default">Default Size</Button>
              <Button variant="primary" size="large">Large Size</Button>
            </div>
          </ComponentSection>

          <ComponentSection id="badges" title="1.2 Badges" description="Badge component for labels and status indicators">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="success" dot>With Dot</Badge>
              <Badge size="sm">Small</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </ComponentSection>

          <ComponentSection id="cards" title="1.3 Cards" description="Card containers with multiple variants">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card variant="default" padding="md">
                <Card.Header>
                  <Card.Title>Default Card</Card.Title>
                  <Card.Description>A basic card with border</Card.Description>
                </Card.Header>
                <Card.Body>Card content goes here</Card.Body>
              </Card>
              <Card variant="elevated" padding="md">
                <Card.Header>
                  <Card.Title>Elevated Card</Card.Title>
                  <Card.Description>Card with shadow</Card.Description>
                </Card.Header>
                <Card.Body>Hover for more shadow</Card.Body>
              </Card>
              <Card variant="outlined" padding="md">
                <Card.Header>
                  <Card.Title>Outlined Card</Card.Title>
                  <Card.Description>Stronger border</Card.Description>
                </Card.Header>
              </Card>
              <Card variant="ghost" padding="md">
                <Card.Header>
                  <Card.Title>Ghost Card</Card.Title>
                  <Card.Description>Subtle background</Card.Description>
                </Card.Header>
              </Card>
            </div>
          </ComponentSection>

          <ComponentSection id="avatars" title="1.4 Avatars" description="User avatars with status indicators">
            <div className="flex flex-wrap items-end gap-4">
              <Avatar name="John Doe" size="xs" />
              <Avatar name="John Doe" size="sm" />
              <Avatar name="John Doe" size="md" />
              <Avatar name="John Doe" size="lg" />
              <Avatar name="John Doe" size="xl" />
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Avatar name="Online User" status="online" />
              <Avatar name="Offline User" status="offline" />
              <Avatar name="Busy User" status="busy" />
              <Avatar name="Away User" status="away" />
            </div>
            <div className="mt-4">
              <Avatar.Group max={4}>
                <Avatar name="User 1" />
                <Avatar name="User 2" />
                <Avatar name="User 3" />
                <Avatar name="User 4" />
                <Avatar name="User 5" />
                <Avatar name="User 6" />
              </Avatar.Group>
            </div>
          </ComponentSection>

          {/* 2. Form Inputs */}
          <ComponentSection id="inputs" title="2.1 Text Inputs" description="Input fields with labels, hints, and error states">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Default Input" placeholder="Enter text..." />
              <Input label="With Hint" placeholder="Enter email..." hint="We'll never share your email" />
              <Input label="Error State" placeholder="Enter value..." error="This field is required" />
              <Input label="Disabled" placeholder="Can't edit this" disabled />
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Input label="Small" size="sm" placeholder="Small input" />
              <Input label="Medium" size="md" placeholder="Medium input" />
              <Input label="Large" size="lg" placeholder="Large input" />
            </div>
            <div className="mt-6">
              <Textarea label="Textarea" placeholder="Enter a longer message..." rows={4} />
            </div>
          </ComponentSection>

          <ComponentSection id="selects" title="2.2 Selects" description="Select dropdowns for choosing options">
            <div className="grid sm:grid-cols-2 gap-6">
              <Select
                label="Default Select"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
              <Select
                label="With Error"
                error="Please select an option"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                ]}
              />
            </div>
          </ComponentSection>

          <ComponentSection id="checkboxes" title="2.3 Checkboxes & Toggles" description="Checkbox and toggle switch components">
            <CheckboxDemo />
          </ComponentSection>

          <ComponentSection id="radios" title="2.4 Radio Buttons" description="Radio button groups for single selection">
            <RadioDemo />
          </ComponentSection>

          <ComponentSection id="fileinput" title="2.5 File Input" description="File upload with drag and drop">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-stone-500 mb-3">Default Style</p>
                <FileInput label="Upload file" accept=".pdf,.doc,.docx" />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Dropzone Style</p>
                <FileInput
                  variant="dropzone"
                  label="Upload documents"
                  accept=".pdf,.png,.jpg"
                  multiple
                  maxSize={5 * 1024 * 1024}
                  hint="PDF, PNG, or JPG up to 5MB"
                />
              </div>
            </div>
          </ComponentSection>

          {/* 3. Feedback */}
          <ComponentSection id="alerts" title="3.1 Alerts" description="Alert messages for user feedback">
            <div className="space-y-4">
              <Alert variant="info" title="Information">
                This is an informational message.
              </Alert>
              <Alert variant="success" title="Success">
                Your changes have been saved.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review before continuing.
              </Alert>
              <Alert variant="error" title="Error">
                Something went wrong. Please try again.
              </Alert>
              <Alert variant="info" dismissible onDismiss={() => {}}>
                This alert can be dismissed.
              </Alert>
            </div>
          </ComponentSection>

          <ComponentSection id="spinners" title="3.2 Spinners" description="Loading indicators">
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="text-xs mt-2 text-stone-500">Small</p>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <p className="text-xs mt-2 text-stone-500">Medium</p>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <p className="text-xs mt-2 text-stone-500">Large</p>
              </div>
              <div className="text-center">
                <Spinner size="md" variant="primary" />
                <p className="text-xs mt-2 text-stone-500">Primary</p>
              </div>
              <div className="text-center">
                <Spinner.Dots size="md" />
                <p className="text-xs mt-2 text-stone-500">Dots</p>
              </div>
              <div className="text-center">
                <Spinner.Pulse size="md" />
                <p className="text-xs mt-2 text-stone-500">Pulse</p>
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="skeletons" title="3.3 Skeletons" description="Loading placeholder components">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-2 text-stone-600">Text Skeleton</p>
                <Skeleton.Text lines={3} />
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-stone-600">Avatar Skeleton</p>
                <div className="flex gap-4">
                  <Skeleton.Avatar size="sm" />
                  <Skeleton.Avatar size="md" />
                  <Skeleton.Avatar size="lg" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm font-medium mb-2 text-stone-600">Card Skeleton</p>
                <Skeleton.Card />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="toasts" title="3.4 Toasts" description="Toast notifications for user feedback">
            <ToastDemo />
          </ComponentSection>

          <ComponentSection id="progress" title="3.5 Progress" description="Progress bars and indicators">
            <div className="space-y-8">
              <div className="space-y-4">
                <Progress value={25} label="Basic Progress" showValue />
                <Progress value={50} variant="secondary" showValue />
                <Progress value={75} variant="success" showValue />
                <Progress value={100} variant="info" showValue />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Sizes</p>
                <div className="space-y-3">
                  <Progress value={60} size="xs" />
                  <Progress value={60} size="sm" />
                  <Progress value={60} size="md" />
                  <Progress value={60} size="lg" />
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Indeterminate</p>
                <Progress indeterminate />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Radial Progress</p>
                <div className="flex flex-wrap gap-6">
                  <Progress.Radial value={25} size="sm" />
                  <Progress.Radial value={50} size="md" />
                  <Progress.Radial value={75} size="lg" />
                  <Progress.Radial value={100} size="lg" variant="success" />
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* 4. Interactive */}
          <ComponentSection id="modals" title="4.1 Modals" description="Modal dialogs for focused interactions">
            <ModalDemo />
          </ComponentSection>

          <ComponentSection id="accordions" title="4.2 Accordions" description="Collapsible content sections">
            <Accordion defaultValue="item-1">
              <Accordion.Item value="item-1">
                <Accordion.Trigger>What is AccountMap?</Accordion.Trigger>
                <Accordion.Content>
                  AccountMap is a visual account mapping and territory planning tool designed for sales teams.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>How does pricing work?</Accordion.Trigger>
                <Accordion.Content>
                  We offer flexible pricing plans based on team size and features needed. Contact us for details.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger>Is there a free trial?</Accordion.Trigger>
                <Accordion.Content>
                  Yes! We offer a 14-day free trial with full access to all features.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </ComponentSection>

          <ComponentSection id="tabs" title="4.3 Tabs" description="Tabbed navigation for content sections">
            <TabsDemo />
          </ComponentSection>

          <ComponentSection id="dropdowns" title="4.4 Dropdowns" description="Dropdown menus for actions">
            <DropdownDemo />
          </ComponentSection>

          <ComponentSection id="tooltips" title="4.5 Tooltips" description="Hover tooltips for additional info">
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Top tooltip" side="top">
                <Button variant="outline">Hover (Top)</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" side="right">
                <Button variant="outline">Hover (Right)</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" side="bottom">
                <Button variant="outline">Hover (Bottom)</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" side="left">
                <Button variant="outline">Hover (Left)</Button>
              </Tooltip>
            </div>
          </ComponentSection>

          <ComponentSection id="drawers" title="4.6 Drawers" description="Slide-out panels for secondary content">
            <DrawerDemo />
          </ComponentSection>

          <ComponentSection id="carousel" title="4.7 Carousel" description="Image and content carousels">
            <div className="space-y-8">
              <Carousel showArrows showDots className="h-64 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-700">
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-green-light to-green-main text-white text-2xl font-bold">
                  Slide 1
                </div>
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-brass-light to-brass-main text-white text-2xl font-bold">
                  Slide 2
                </div>
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white text-2xl font-bold">
                  Slide 3
                </div>
              </Carousel>
            </div>
          </ComponentSection>

          {/* 5. Navigation & Data */}
          <ComponentSection id="breadcrumbs" title="5.1 Breadcrumbs" description="Navigation breadcrumb trails">
            <div className="space-y-6">
              <Breadcrumbs>
                <Breadcrumbs.Item href="/" icon={Breadcrumbs.HomeIcon}>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/products/maps">Maps</Breadcrumbs.Item>
                <Breadcrumbs.Item current>Territory Map</Breadcrumbs.Item>
              </Breadcrumbs>
            </div>
          </ComponentSection>

          <ComponentSection id="pagination" title="5.2 Pagination" description="Page navigation controls">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-stone-500 mb-3">Full Pagination</p>
                <PaginationDemo />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Simple Pagination</p>
                <SimplePaginationDemo />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="tables" title="5.3 Tables" description="Data tables with sorting">
            <Table striped hoverable>
              <Table.Head>
                <Table.Row>
                  <Table.Header>Name</Table.Header>
                  <Table.Header>Role</Table.Header>
                  <Table.Header>Status</Table.Header>
                  <Table.Header align="right">Actions</Table.Header>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John Doe</Table.Cell>
                  <Table.Cell>Sales Rep</Table.Cell>
                  <Table.Cell><Badge variant="success" dot>Active</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jane Smith</Table.Cell>
                  <Table.Cell>Account Exec</Table.Cell>
                  <Table.Cell><Badge variant="success" dot>Active</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Bob Johnson</Table.Cell>
                  <Table.Cell>Manager</Table.Cell>
                  <Table.Cell><Badge variant="warning" dot>Away</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentSection>

          {/* Layout */}
          <ComponentSection id="dividers" title="5.4 Dividers" description="Visual separators">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 mb-2">Solid</p>
                <Divider />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">Dashed</p>
                <Divider variant="dashed" />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">With Label</p>
                <Divider label="OR" />
              </div>
            </div>
          </ComponentSection>

          {/* 6. Sections */}
          <div className="mt-16 -mx-8 bg-white dark:bg-stone-800 border-y border-stone-200 dark:border-stone-700">
            <ComponentSection id="features" title="6.1 Features Section" description="Feature grids with icons" fullWidth>
              <Features
                badge="Features"
                title="Everything you need"
                subtitle="Built for modern sales teams"
                columns={3}
                features={[
                  { icon: Features.Icons.Lightning, title: 'Fast Setup', description: 'Get started in minutes, not days' },
                  { icon: Features.Icons.Shield, title: 'Secure', description: 'Enterprise-grade security built in' },
                  { icon: Features.Icons.Chart, title: 'Analytics', description: 'Deep insights into your territory' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="pricing" title="6.2 Pricing Section" description="Pricing tables" fullWidth>
              <Pricing
                badge="Pricing"
                title="Simple, transparent pricing"
                subtitle="Choose the plan that's right for you"
                plans={[
                  {
                    name: 'Starter',
                    description: 'For small teams',
                    price: 29,
                    features: ['Up to 5 users', 'Basic analytics', 'Email support'],
                  },
                  {
                    name: 'Pro',
                    description: 'For growing teams',
                    price: 79,
                    popular: true,
                    highlighted: true,
                    features: ['Up to 20 users', 'Advanced analytics', 'Priority support', 'API access'],
                  },
                  {
                    name: 'Enterprise',
                    description: 'For large organizations',
                    price: 'Custom',
                    features: ['Unlimited users', 'Custom integrations', 'Dedicated support', 'SLA'],
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="stats" title="6.3 Stats Section" description="Animated statistics display" fullWidth>
              <Stats
                badge="By the Numbers"
                title="Trusted by teams worldwide"
                stats={[
                  { value: 10000, suffix: '+', label: 'Active Users' },
                  { value: 500, suffix: '+', label: 'Companies' },
                  { value: 99, suffix: '%', label: 'Uptime' },
                  { value: 24, suffix: '/7', label: 'Support' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="timeline" title="6.4 Timeline Section" description="Steps and timeline displays" fullWidth>
              <Timeline
                badge="How it Works"
                title="Get started in 3 steps"
                items={[
                  { title: 'Sign Up', description: 'Create your account in seconds', status: 'completed' },
                  { title: 'Import Data', description: 'Connect your CRM or upload a CSV', status: 'current' },
                  { title: 'Start Mapping', description: 'Visualize and plan your territory', status: 'upcoming' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="testimonials" title="6.5 Testimonials Section" description="Customer testimonials" fullWidth>
              <Testimonials
                badge="Testimonials"
                title="What our customers say"
                columns={2}
                testimonials={[
                  {
                    quote: 'AccountMap transformed how we plan our territories. The visual interface is intuitive and powerful.',
                    author: 'Sarah Chen',
                    role: 'VP of Sales',
                    company: 'TechCorp',
                    rating: 5,
                  },
                  {
                    quote: 'Finally, a tool that makes account mapping simple. Our team adopted it immediately.',
                    author: 'Michael Brown',
                    role: 'Sales Director',
                    company: 'GrowthCo',
                    rating: 5,
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900">
            <ComponentSection id="contact" title="6.6 Contact Section" description="Contact forms" fullWidth>
              <Contact
                badge="Contact"
                title="Get in touch"
                subtitle="We'd love to hear from you"
                variant="centered"
              />
            </ComponentSection>
          </div>

        </main>
      </div>
    </div>
    </ToastProvider>
  );
}

// Helper component for sections
function ComponentSection({ id, title, description, children, fullWidth }) {
  return (
    <section id={id} className={`mb-16 scroll-mt-24 ${fullWidth ? '' : ''}`}>
      <div className={fullWidth ? '' : 'mb-6'}>
        <h2 className={`text-xl font-bold text-stone-900 dark:text-stone-100 ${fullWidth ? 'px-8 pt-8' : ''}`}>
          {title}
        </h2>
        <p className={`text-stone-600 dark:text-stone-400 mt-1 ${fullWidth ? 'px-8 mb-4' : ''}`}>
          {description}
        </p>
      </div>
      {!fullWidth && (
        <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50">
          {children}
        </div>
      )}
      {fullWidth && children}
    </section>
  );
}

// Demo components with state
function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Checkbox label="Default checkbox" />
        <Checkbox label="Checked checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <Checkbox label="With description" description="This checkbox has additional context" />
        <Checkbox label="Disabled" disabled />
      </div>
      <Divider />
      <div className="space-y-3">
        <Toggle label="Default toggle" checked={toggleOn} onChange={setToggleOn} />
        <Toggle label="Small toggle" size="sm" checked={false} onChange={() => {}} />
        <Toggle label="Large toggle" size="lg" checked={true} onChange={() => {}} />
        <Toggle label="Disabled" disabled checked={false} onChange={() => {}} />
      </div>
    </div>
  );
}

function RadioDemo() {
  const [value, setValue] = useState('option1');

  return (
    <Radio.Group
      name="demo"
      value={value}
      onChange={setValue}
      options={[
        { value: 'option1', label: 'Option 1', description: 'Description for option 1' },
        { value: 'option2', label: 'Option 2', description: 'Description for option 2' },
        { value: 'option3', label: 'Option 3', description: 'Description for option 3' },
      ]}
    />
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Content title="Example Modal" description="This is a modal dialog">
          <p className="text-stone-600 dark:text-stone-400">
            Modal content goes here. You can put forms, content, or any other components inside.
          </p>
          <Modal.Footer>
            <Modal.Close>
              <Button variant="outline">Cancel</Button>
            </Modal.Close>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

function TabsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-stone-500 mb-3">Underline Style</p>
        <Tabs defaultValue="tab1">
          <Tabs.List variant="underline">
            <Tabs.Trigger value="tab1" variant="underline">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="underline">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="underline">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Account settings content</Tabs.Content>
          <Tabs.Content value="tab2">Settings content</Tabs.Content>
          <Tabs.Content value="tab3">Billing content</Tabs.Content>
        </Tabs>
      </div>
      <div>
        <p className="text-sm text-stone-500 mb-3">Pills Style</p>
        <Tabs defaultValue="tab1">
          <Tabs.List variant="pills">
            <Tabs.Trigger value="tab1" variant="pills">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="pills">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="pills">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Account settings content</Tabs.Content>
          <Tabs.Content value="tab2">Settings content</Tabs.Content>
          <Tabs.Content value="tab3">Billing content</Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
}

function DropdownDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline">
          Open Menu
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Actions</Dropdown.Label>
        <Dropdown.Item shortcut="⌘E">Edit</Dropdown.Item>
        <Dropdown.Item shortcut="⌘D">Duplicate</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.CheckboxItem checked={checked} onCheckedChange={setChecked}>
          Show Preview
        </Dropdown.CheckboxItem>
        <Dropdown.Separator />
        <Dropdown.Item destructive>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast('This is a default toast')}>
        Default Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Operation completed successfully!')}>
        Success Toast
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
        Error Toast
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Please review your input')}>
        Warning Toast
      </Button>
      <Button variant="outline" onClick={() => toast.info('Here is some information')}>
        Info Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Saved!', {
        title: 'Changes Saved',
        action: { label: 'Undo', onClick: () => alert('Undone!') }
      })}>
        With Action
      </Button>
    </div>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('right');

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => { setPosition('left'); setOpen(true); }}>
        Open Left
      </Button>
      <Button variant="outline" onClick={() => { setPosition('right'); setOpen(true); }}>
        Open Right
      </Button>
      <Button variant="outline" onClick={() => { setPosition('bottom'); setOpen(true); }}>
        Open Bottom
      </Button>

      <Drawer open={open} onClose={() => setOpen(false)} position={position}>
        <Drawer.Content>
          <Drawer.Header>Drawer Title</Drawer.Header>
          <Drawer.Body>
            <p className="text-stone-600 dark:text-stone-400">
              This is the drawer content. You can put forms, navigation, or any content here.
            </p>
            <div className="mt-4 space-y-3">
              <Input label="Name" placeholder="Enter name..." />
              <Input label="Email" placeholder="Enter email..." />
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Save</Button>
            </div>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(5);
  return <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />;
}

function SimplePaginationDemo() {
  const [page, setPage] = useState(3);
  return <Pagination.Simple currentPage={page} totalPages={10} onPageChange={setPage} />;
}
