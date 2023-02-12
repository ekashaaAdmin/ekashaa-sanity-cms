import {defineField, defineType} from 'sanity'
import property from './propertyInfo'

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
            type: 'string'
        }),
        defineField({
            name: 'propertyTestimonial',
            title: 'Property',
            type: 'reference',
            to: [{type: property.name}]
        }),
        defineField({
            name: 'testimonialContent',
            title: 'Testimonial',
            type: 'string'
        })
    ]
})