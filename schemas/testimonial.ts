import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'profilePicture',
            title: 'Profile Picture',
            type: 'image'
        }),
        defineField({
            name: 'name',
            title: 'Name of the Person',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'property',
            title: 'Property',
            description: 'property associated with the testimonial if any',
            type: 'string'
        }),
        defineField({
            name: 'testimonialContent',
            title: 'Testimonial',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ]
})