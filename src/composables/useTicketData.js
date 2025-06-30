// composables/useTicketData.js
import { ref, computed } from 'vue'

export function useTicketData() {
    const selectedDay = ref('day1')

    const ticketSteps = computed(() => [
        {
            id: 'open-page',
            title: 'Open Ticket Page',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            iconImage: 'ticket.png'
        },
        {
            id: 'complete-payment',
            title: 'Complete Payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            iconImage: 'payment.png'
        },
        {
            id: 'ticket-ready',
            title: 'Your Ticket Ready',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            iconImage: 'voucher.png'
        }
    ])

    const eventDays = computed(() => [
        { id: 'day1', label: 'Day 1', date: 'Wednesday, 25 May 2022' },
        { id: 'day2', label: 'Day 2', date: 'Thursday, 26 May 2022' },
        { id: 'day3', label: 'Day 3', date: 'Friday, 27 May 2022' },
        { id: 'day4', label: 'Day 4', date: 'Saturday, 28 May 2022' },
    ])

    const eventScheduleData = computed(() => ({
        day1: [
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Opening Performance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
            },
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Appearance of Steven Wilson',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            },
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Closing Performance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
        ],
        day2: [
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Opening Performance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
            },
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Appearance of Steven Wilson',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            },
        ],
        day3: [
            {
                time: '06:00 PM - 09:00 PM',
                title: 'Opening Performance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
            },
        ],
    }))

    const selectDay = (dayId) => {
        selectedDay.value = dayId
    }

    return {
        selectedDay,
        ticketSteps,
        eventDays,
        eventScheduleData,
        selectDay
    }
}
