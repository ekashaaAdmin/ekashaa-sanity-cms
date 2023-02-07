import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'Property',
    title: 'Property Information',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Property Name',
        type: 'string',
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'object',
        fields:[
            ({
                name: 'address',
                title: 'Address',
                type: 'string',
            }),
            ({
                name: 'pincode',
                title: 'Pincode',
                type: 'number'
            }),
            ({
                name: 'link',
                title: 'Link',
                type: 'url',
            }),
            ({
                name: 'geopoint',
                title: 'Geopoint',
                type: 'geopoint',
            })
        ],
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
      }),
      defineField({
        name: 'developer',
        title: 'Developer',
        type: 'reference',
        to: [{type: 'developer'}]
      }),
      defineField({
        name: 'imageUrl',
        title: 'Image',
        type: 'url' 
      }),
      defineField({
        name: 'configuration',
        title: 'Configuration',
        type: 'number',
      }),
      defineField({
        name: 'sqft',
        title: 'Sqft',
        type: 'number',
      }),
      defineField({
        name: 'carpetArea',
        title: 'Carpet Area',
        type: 'number',
      }),
      defineField({
        name: 'possessionDate',
        title: 'PossessionDate',
        type: 'datetime',
      })
    ],
  
    preview: {
      select: {
        title: '',
        author: '',
        media: '',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  })
  