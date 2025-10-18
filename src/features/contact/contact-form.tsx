import { motion } from 'framer-motion'
import { MapPin, Clock, LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { staggerContainer, staggerItem } from '@/lib/motion'

interface ContactFormProps {
  profile: {
    name: string
    email: string
    location: string
  }
}

export function ContactForm({ profile }: ContactFormProps) {
  type ContactInfo = {
    icon: LucideIcon
    label: string
    value: string
    href?: string
  }
  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
    },
    {
      icon: Clock,
      label: 'Response',
      value: 'Within 24 hours',
    },
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 gap-8 lg:grid-cols-2"
    >
      {/* Contact Info */}
      <motion.div variants={staggerItem} className="space-y-6">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white">
            Let's Get In Touch
          </h3>
          <p className="leading-relaxed text-slate-300">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map(info => (
            <motion.div
              key={info.label}
              variants={staggerItem}
              className="flex items-center gap-4"
            >
              <div className="rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3">
                <info.icon className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-400">
                  {info.label}
                </div>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-white transition-colors hover:text-purple-400"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-white">{info.value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4">
          <h4 className="mb-3 text-lg font-semibold text-white">
            What I'm Looking For
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Full-time opportunities',
              'Internships',
              'Research projects',
              'Open source contributions',
            ].map(item => (
              <Badge
                key={item}
                className="border border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-xs text-purple-300 transition-colors hover:bg-purple-500/30"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
