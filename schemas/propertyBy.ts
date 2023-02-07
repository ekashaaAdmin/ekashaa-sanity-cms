import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'developer',
    title: 'Developer',
    type: 'document',
    fields: [
    defineField({
        name: 'dname',
        title: 'Name',
        type: 'string'
    }),
    defineField({
        name: 'totalProjects',
        title: 'Total Projects',
        type: 'number'
    }),
    defineField({
        name: 'ongoingProjects',
        title: 'Ongoing Projects',
        type: 'number'
    }),
    defineField({
        name: 'upcomingProjects',
        title: 'Upcoming Projects',
        type: 'number'
    }),
    defineField({
        name:  'description',
        title:  'Description',
        type: 'string'
    })
    ]
})