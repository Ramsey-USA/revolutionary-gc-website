'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your MH Construction assistant. How can I help you today? I can provide information about our services, projects, estimates, or answer any questions you have.",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Service-related responses
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive construction services including custom home building, renovations, commercial construction, and specialty military-grade projects. Our AI-powered tools help provide accurate estimates and 3D visualizations."
    }
    
    // Pricing/estimate responses
    if (message.includes('price') || message.includes('cost') || message.includes('estimate')) {
      return "We offer free project estimates! You can use our AI Project Estimator tool for instant preliminary costs, or schedule a consultation for detailed pricing. Our estimates are typically accurate within 15%."
    }
    
    // Timeline responses
    if (message.includes('timeline') || message.includes('how long') || message.includes('time')) {
      return "Project timelines vary based on scope and complexity. Typical residential projects range from 2-8 months, while commercial projects can take 6-18 months. Our AI tools provide detailed phase-by-phase timelines."
    }
    
    // Contact/scheduling responses
    if (message.includes('contact') || message.includes('call') || message.includes('schedule') || message.includes('meeting')) {
      return "You can reach us at (555) 123-4567 or schedule a consultation using our calendar booking system. We're available Monday-Friday 8AM-6PM, and Saturday 9AM-2PM."
    }
    
    // Location/area responses
    if (message.includes('location') || message.includes('area') || message.includes('where')) {
      return "We serve the greater metropolitan area and surrounding regions. Our veteran-owned company is fully licensed and insured for both residential and commercial projects."
    }
    
    // Technology/AI responses
    if (message.includes('ai') || message.includes('technology') || message.includes('3d') || message.includes('virtual')) {
      return "We use cutting-edge AI technology for project estimation, 3D modeling, and virtual walkthroughs. Our AI Project Estimator and 3D Explorer tools give you unprecedented insight into your project before construction begins."
    }
    
    // Military/veteran responses
    if (message.includes('military') || message.includes('veteran') || message.includes('discount')) {
      return "As a veteran-owned company, we're proud to serve our military community. We offer special consideration for fellow veterans and active military personnel. Thank you for your service!"
    }
    
    // Quality/warranty responses
    if (message.includes('quality') || message.includes('warranty') || message.includes('guarantee')) {
      return "We maintain military-grade standards in all our work. Every project comes with comprehensive warranties, and we use only premium materials. Our commitment to excellence is backed by our veteran discipline and integrity."
    }
    
    // Default helpful response
    return "I'd be happy to help you with that! For detailed information about our services, pricing, or to schedule a consultation, please feel free to contact our team directly. Is there anything specific about our construction services you'd like to know more about?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // 1-2 second delay
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-mh-hunter-green to-army-gold hover:from-army-gold hover:to-mh-hunter-green text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-mh-hunter-green to-army-gold text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <div>
                <h3 className="font-semibold">MH Construction Assistant</h3>
                <p className="text-xs opacity-90">Here to help 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-dark-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white dark:bg-dark-surface text-army-black dark:text-dark-text shadow-sm'
                      : 'bg-gradient-to-r from-mh-hunter-green to-army-gold text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-0.5 text-mh-hunter-green" />}
                    {!message.isBot && <User size={16} className="mt-0.5" />}
                    <div className="text-sm">{message.text}</div>
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-dark-surface p-3 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-mh-hunter-green" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-mh-hunter-green rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-mh-hunter-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-mh-hunter-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-mh-hunter-green dark:bg-dark-background dark:text-dark-text"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-mh-hunter-green to-army-gold hover:from-army-gold hover:to-mh-hunter-green text-white p-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot