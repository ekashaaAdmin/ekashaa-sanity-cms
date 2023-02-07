import {defineField, defineType} from 'sanity'
import propertyInfo from './propertyInfo'

export default defineType({
    name: 'PropertyAbout',
    title: 'Property Description',
    type: 'object',
    fields: [
    //   defineField({
    //     name: 'referencingObject',
    //     title: 'referencingInfo',
    //     type: 'reference', 
    //     to: [{type: 'name'}]
    // }),
      defineField({
        name: 'propertyDescription',
        title: 'Property Description',
        type: 'string',
      }),
      defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
      }),
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
      }),
      defineField({
        name: 'reraId',
        title: 'ReraId',
        type: 'number',
      }),
      defineField({
        name: 'floors',
        title: 'Floors',
        type: 'number',
      }),
      defineField({
        name: 'area',
        title: 'Area',
        type: 'number',
      }),
      defineField({
        name: 'amenities',
        title: 'Amenities',
        type: 'string',
      })
    ]
    ,
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  })
  